export  interface productType{
    _id:string,
    name:string,
    description: string,
    price: number,
    mrp: number,
    category_id: string,
    stock_quantity: number,
    created_at:Date,
    imagesUrl:string[],
    sizes:string[],
    brand:string,
    ratings:{
        count:number,
        average:number,
    }
}