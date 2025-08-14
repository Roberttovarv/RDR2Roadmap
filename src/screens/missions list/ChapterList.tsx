import { RenderChapter } from "./components/renderChapter"
export const ChaperList = () => {
    const chapters = [1, 2, 3, 4, 5, 6, "EP1", "EP2"]

    return (
    <>
       {chapters.map((item, index) => (
            <RenderChapter key={index} chapter={item} />
        ))}
        
    </>
    )
}