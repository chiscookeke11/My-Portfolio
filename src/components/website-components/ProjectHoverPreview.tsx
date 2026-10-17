
import { Projects } from "../../types/types";

interface ProjectHoverPreviewProps {
    project: Projects;
    style?: React.CSSProperties;
}

export default function ProjectHoverPreview({
    project,
    style,
}: ProjectHoverPreviewProps) {
    const isVideo = project.image.includes(".mp4");

    return (
        <div
            style={style}
            className="pointer-events-none fixed z-50 w-[280px]
                overflow-hidden rounded-2xl border border-[#333]
                bg-[#111] shadow-2xl animate-in fade-in duration-150"
        >
            <div className="h-[174px] w-full overflow-hidden bg-[#181818]">
                {isVideo ? (
                    <video
                        src={project.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover"
                    />
                ) : (
                    <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover"
                    />
                )}
            </div>

            <div className="px-4 py-3">
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                    {project.title} Preview
                </p>
            </div>
        </div>
    );
}
