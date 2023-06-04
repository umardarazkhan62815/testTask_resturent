import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet, TouchableOpacity, Alert, Button, FlatList } from 'react-native';

const OneProdcut = ({ navigation, route }) => {
    const [product, setProduct] = useState(route.params.product)
    const [products, setProducts] = useState(route.params.products)
    const [clicks, setClicks] = useState(1)
    const price = product.price * clicks;
    console.log('route====>', products)

    const IncrementItem = () => {
        setClicks(clicks + 1);
    }
    const DecreaseItem = () => {
        if (clicks > 1) {
            setClicks(clicks - 1);
        } else {
            setClicks(1);
        }
    }
    const OtherProducts = ({ item }) => {
        return (
            <ScrollView horizontal={true}>
                <View style={[styles.card, styles.shadowProp]}>
                    <View style={{ width: '100%' }}>
                        <Image style={styles.pic} source={{ uri: item.photo }} />
                    </View>
                    <View style={styles.details}>
                        <Text style={{ color: '#000000' }}>{item.title}</Text>
                    </View>
                    <View style={styles.price}>
                        <Text>Rs. {item.price}</Text>
                    </View>
                </View>
            </ScrollView >

        )
    }


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View>
                    <View style={[styles.imgview, { position: 'relative' }]}>
                        <Image style={styles.img} source={{ uri: product.photo }} />
                        <View style={{ position: 'absolute', top: 5, left: 5 }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image source={require('../Assets/Images/back.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{product.title}</Text>
                        <View style={{ flexDirection: 'row', marginLeft: '2%', paddingTop: '2%' }}>
                            <Image source={require('../Assets/Images/star.png')} />
                            <Text>{product.rating}</Text>
                        </View>
                        <View style={{ width: '50%', flexDirection: 'row', marginLeft: '5%' }}>
                            <View style={{ width: '20%' }}>
                                <Button color={'#FB9342'} title='-' onPress={() => DecreaseItem()} />
                            </View>
                            <Text style={{ padding: 10, color: '#000000' }}>{clicks}</Text>

                            <View style={{ width: '20%' }}>
                                <Button color={'#FB9342'} title='+' onPress={() => IncrementItem()} />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '80%', alignContent: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={styles.priceview}>
                            <Text style={styles.price}>Total Price: {price} Rs</Text>
                        </View>
                    </View>
                    <View style={styles.des}>
                        <Text style={styles.descTitle}>Description</Text>
                        <Text style={styles.destext}>{product.description}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity onPress={() => { Alert.alert("Your Order Add in Cart") }}>
                            <View style={{ flexDirection: 'column', width: '50%' }}>
                                <Image source={require('../Assets/Images/cart.png')} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { Alert.alert("Your Order Placed") }}>
                            <View style={{ flexDirection: 'column', width: '50%' }}>
                                <Image source={require('../Assets/Images/delivery.png')} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: '5%'}}>
                        <View style={{ marginLeft: 10 }}><Text style={{ color: "#000000", fontSize: 20 }}>{'Other Food Items:'}</Text></View>
                        <FlatList
                            horizontal
                            data={products}
                            renderItem={OtherProducts}
                            keyExtractor={(item, index) => index.toString()}
                        // numColumns={2}
                        />
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF5ED'
    },
    imgview: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    img: {
        height: 360,
        width: 395,
    },
    des: {
        flex: 1,
        margin: '5%',
    },
    descTitle: {
        fontSize: 23,
        color: 'black',
        textDecorationLine: 'underline',
    },
    destext: {
        fontSize: 15,
    },
    titleView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: '5%',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
    },
    priceview: {
        borderRadius: 5,
        backgroundColor: '#FB9342',
        height: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    price: {
        fontSize: 15,
        color: 'white',
    },
    card: {
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 100,
        margin: 10,
    },
    shadowProp: {
        shadowColor: '#000000',
        elevation: 2,
    },
    pic: {
        alignContent: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        position: 'relative',
        height: 80,
        width: 100,
    },
});

export default OneProdcut;
