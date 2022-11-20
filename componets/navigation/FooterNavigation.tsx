import {BottomNavigation, Text} from "react-native-paper";
import React from "react";
import InputDataCenter from '../input/InputDataCenter'

const StoreRoute = () => <InputDataCenter/>
const FavoriteRoute = () => <Text>Favorite</Text>
const MemoRoute = () => <Text>Memo</Text>

export default function FooterNavigation() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'store', title: 'Store', focusedIcon: 'store', unfocusedIcon: 'store-outline'},
        {key: 'favorite', title: 'Favorite', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    ])

    const renderScene = BottomNavigation.SceneMap({
        store: StoreRoute,
        favorite: FavoriteRoute
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}
