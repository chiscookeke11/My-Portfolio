import Experience from "../../components/website-components/Experience"
import Hero from "../../components/website-components/Hero"
import Projects from "../../components/website-components/Projects"



export default function Home() {
    return (
        <div>
            <Hero />

            {/* Projects section */}
            <Projects />
            <Experience />

        </div >
    )
}