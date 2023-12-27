// type plana
    // Selector
    // 'debito' | 'credito' | 'efectivo'
type PaymentMethodType = 'debito' | 'credito' | 'efectivo'
interface IPaymentMethodType {paymentMethod : 'debito' | 'credito' | 'efectivo'}

// Interface
interface IProductoBase{
    price: number,
    // Selector
    paymentMethod : IPaymentMethodType['paymentMethod']
    nameClient : string
}

// Type
type ProductoBaseType = {
    price: number,
    paymentMethod : PaymentMethodType
    nameClient : string
}

// Herencia
interface IFisica extends IProductoBase {
    ProductName : string
    ClientAddress : string
    quantity : number
}
type VirutalType = ProductoBaseType & {
    templateName : string
    format : 'jpg'|'png'|'pdf'
}

class ProductoVirtual implements VirutalType{
    price: number =500
    paymentMethod: PaymentMethodType = 'efectivo'
    nameClient: string = 'Miguel'
    templateName: string = 'Folleto1'
    format: "jpg" | "png" | "pdf" = 'png'
}
class ProductoFisico implements IFisica{
    price: number =500
    paymentMethod: PaymentMethodType = 'efectivo'
    nameClient: string = 'Miguel'
    ClientAddress: string = 'Folleto'
    ProductName: string = 'Street 101'
    quantity: number = 1000
}