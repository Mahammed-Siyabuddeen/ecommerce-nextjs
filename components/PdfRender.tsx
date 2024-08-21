import React from 'react'
import { Document, Page, PDFViewer, Text, Image, View, StyleSheet, Path, Svg } from '@react-pdf/renderer'
import { orderDetailsType } from './Types/orderDetailType'
const PdfRender = ({data}:{data:orderDetailsType}) => {

    const style = StyleSheet.create({
        container: {
            padding: '50px'
        },

        section: {
            display: 'flex',
            // justifyContent:'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            fontSize: '10',
            backgroundColor: '#d1d1d1',
            marginTop: '4'

        },
        column: {
            flex: '1',
            padding: '2'
        },
        image: {
            width: '80',
            height: 60,
            padding: 2
        },
        header: {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: "row",
            marginBottom: "100",

        },
        fontbold: {
            fontSize: '20',
            fontWeight: 'black',
        },
        fontyellow: {
            color: 'yellow'
        },
        total: {
            textAlign: 'right',
            margin: '2',
            marginTop: '12',
            fontWeight: 'bold',
            fontSize: '14',
        },
        icon: {
            width: 24,
            height: 24,
            marginBottom: 4,
        },
        leftContent:{
            textAlign: 'right',
            fontSize:'10',
            paddingBottom:'2'
        }

    })
    return (
            <Document >
                <Page style={style.container} size={'A4'}>
                    <View style={style.header}>
                        <Text style={style.fontbold}>Pai<Text style={style.fontyellow}>rca</Text>re</Text>
                        <Text style={style.fontbold}>Invoice</Text>
                    </View>
                    <View style={style.leftContent}>
                        <Text>Order ID : {data._id}</Text>
                        <Text>Data : {data.create_at.split('T')[0]||''}</Text>
                    </View>
                    <View style={style.section}>
                        <View style={style.column}><Text>Image</Text></View>
                        <View style={style.column}><Text>Name</Text></View>
                        <View style={style.column}><Text>Price</Text></View>
                        <View style={style.column}><Text>Qty</Text></View>
                        <View style={style.column}><Text>Total</Text></View>
                    </View>
                    <View style={style.section}>
                        <View style={style.column}><Image style={style.image} src={data.productImage[0]} /></View>
                        <View style={style.column}><Text>{data.productName}</Text></View>
                        <View style={style.column}> <Text>{(data.totalPrice/data.quantity)}</Text></View>
                        <View style={style.column}><Text>{data.quantity}</Text></View>
                        <View style={style.column}><Text>{data.totalPrice}</Text></View>
                    </View>
                    <View>
                        <Text style={style.total}>Total : {data.totalPrice}</Text>
                    </View>
                </Page>
            </Document>

    )
}

export default PdfRender