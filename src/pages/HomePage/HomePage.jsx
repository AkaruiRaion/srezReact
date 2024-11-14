import { Banner } from "../../components/banner/Banner"
import { Slider } from "../../components/slider/Slider"

export function HomePage() {
    return (
        <section>
            <Banner />
            <div className="home container">
                <h2>Новости о коллекциях</h2>
                <Slider />
            </div>
        </section>
    )
}