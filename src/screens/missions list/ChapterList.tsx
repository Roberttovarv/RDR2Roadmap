import { FlatList } from "react-native"
import { RenderChapter } from "./components/renderChapter"
export const ChaperList = () => {
    const chapters = [1, 2, 3, 4, 5, 6, "EP1", "EP2"]

    return (
        
        <FlatList
        data={chapters}
        keyExtractor={chapter => chapter.toString()}
        renderItem={({item}) => <RenderChapter chapter={item} /> }
        removeClippedSubviews={false} />
    )
}