import React, { useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
    const [Data, setData] = useState(products);
    const [CData, setCData] = useState(products);
    const [search, setSearch] = useState('');

    const oneProduct = ({ item }) => (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('OneProduct', { product: item, products: products })}>
                <View style={[styles.card, styles.shadowProp]}>
                    <View style={{ width: '100%' }}>
                        <Image style={styles.pic} source={{ uri: item.photo }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text>Rs. {item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </ScrollView >
    );

    const searchFilter = text => {
        if (text) {
            const newData = CData.filter(item => {
                const itemData = item.title
                    ? item.title.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setData(newData);
            setSearch(text);
        } else {
            setData(CData);
            setSearch(text);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: '30%', alignItems: 'center' }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../Assets/Images/chef.png')} />
                </View>
                <View style={{ width: '70%', paddingTop: '5%', alignContent: 'flex-start' }}>
                    <Text style={{ fontSize: 35, color: '#000000', textDecorationLine: 'underline' }}>{'My Restaurant'}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
                <View style={{ marginTop: '3%' }}>
                    <Image style={{ height: 40, width: 40 }} source={require('../Assets/Images/search.png')} />
                </View>
                <View style={styles.serchview}>
                    <TextInput
                        placeholder="Search here..."
                        value={search}
                        onChangeText={text => searchFilter(text)}
                    />
                </View>
            </View>
            <ScrollView>
                <FlatList
                    data={Data}
                    renderItem={oneProduct}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5ED',
    },
    serchview: {
        width: "83%",
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 5,
    },
    pic: {
        alignContent: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: 'relative',
        height: 150,
        width: 170,
    },
    details: {
        justifyContent: 'center',
        marginTop: 5,
        marginLeft: '5%',
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    price: {
        marginLeft: '5%'
    },
    card: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        width: 170,
        marginVertical: '5%',
    },
    shadowProp: {
        shadowColor: '#000000',
        elevation: 2,
    },
});

export default Home;

const products = [{
    "title": "Chicken Shawarma",
    "description": "This is one of my signature recipes that will be very familiar to all my friends because I make this so often. It’s off the charts for effort vs output: just a handful of everyday spices, garlic, a splash of lemon and olive oil transforms into the most incredible flavour.",
    "photo": "https://www.recipetineats.com/wp-content/uploads/2017/01/Chicken-Shawarma-Wrap_3.jpg",
    "price": 250,
    "rating": 4
}, {
    "title": "karachi Biryani",
    "description": "The most famous Biryani in Pakistan, this variant is indeed every Biryani lover's favourite. Dum method is used in the preparation which infuses the correct flavours in the rice and meat.",
    "photo": "https://bundukhan.ca/wp-content/uploads/2021/12/Karchi-chicken-Biryani.jpg",
    "price": 450,
    "rating": 4.3
}, {
    "title": "Beef Pulao",
    "description": "The meat was tender, the rice was properly cooked, and the flavors were incredible. The combination becomes divine when raita and salad are added. And when paired with a cold beverage, it is the ideal meal. Their pulao was delicious, and we both agreed. This is among Karachi’s top pulao dishes.",
    "photo": "https://www.pakistanihealthyrecipes.com/wp-content/uploads/2021/05/pakistani-chicken-karahi-recipe.jpg",
    "price": 1500,
    "rating": 4.2
}, {
    "title": "Beef Karahi",
    "description": "A classic Pakistan dish, the Korai is also known as a karahi, kadai or a kadhi is a dish very similar to Balti. Both containing stir fried meat and vegetables. Both getting their name directly from the cooking pot in which they are prepared in. A tasty and thick sauce containing plenty of juicy red peppers.",
    "photo": "https://kfoods.com/images1/newrecipeicon/karahi-gosht_5387.jpg",
    "price": 1800,
    "rating": 4.1
}, {
    "title": "Zinger Burger",
    "description": "A well-seasoned, crispy fried chicken fillet slathered with a special burger sauce, topped with a slice of Cheddar cheese, finished off with Romaine lettuce and put inside a soft Broiche bun; this is what dreams are made of.",
    "photo": "https://static.tossdown.com/images/739a2889bc3210699fde4b5535c9fe25.jpeg",
    "price": 300,
    "rating": 3.9
}, {
    "title": "Club Sandwich",
    "description": "When you order a club sandwich, you often get a plate with stacked, toasted bread layered with turkey or ham, bacon, ham, lettuce, tomato and mayonnaise. Although ingredients can vary, the composition is both simple and recognizable.",
    "photo": "https://kfoods.com/images1/newrecipeicon/club-sandwiches_3005.jpg",
    "price": 550,
    "rating": 4.1
}, {
    "title": "Chicken Pizza",
    "description": "Fire up your taste buds with this fiery and flavorful pizza. The zesty tomato sauce, gooey cheese, and tender chicken are topped with a generous sprinkle of fiery spices that will make your mouth sing. With each cheesy, spicy bite, you'll be transported to flavor town, where every slice is a slice of pure pizza paradise!",
    "photo": "https://img.buzzfeed.com/thumbnailer-prod-us-east-1/video-api/assets/216054.jpg?resize=1200:*",
    "price": 1200,
    "rating": 4.4
}, {
    "title": "Ice Cream",
    "description": "Ice cream, frozen dairy food made from cream or butterfat, milk, sugar, and flavourings. Frozen custard and French-type ice creams also contain eggs. Hundreds of flavours have been devised, the most popular being vanilla, chocolate, and strawberry.",
    "photo": "https://cdn.britannica.com/50/80550-050-5D392AC7/Scoops-kinds-ice-cream.jpg",
    "price": 300,
    "rating": 4.3
}]