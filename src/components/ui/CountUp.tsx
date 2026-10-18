
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
}

export default function CountUp({
    end,
    duration = 2,
    suffix = "+",
}: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    const isInView = useInView(ref, {
        once: true,
        amount: 0.5,
    });

    useEffect(() => {
        if (!isInView) return;

        let animationFrame: number;
        let startTime: number | undefined;

        const animate = (timestamp: number) => {
            if (startTime === undefined) {
                startTime = timestamp;
            }

            const progress = Math.min(
                (timestamp - startTime) / (duration * 1000),
                1
            );

            const easedProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easedProgress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
}
