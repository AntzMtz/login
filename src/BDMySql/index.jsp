package operacionesAlmacen;
import java.text.SimpleDateFormat;
import java.util.Date;
public class almacen 
{
    private String producto,fechaAux;
    private int precio;
    private double cantidad,total;
    private Date fecha;
    SimpleDateFormat f=new SimpleDateFormat("yyyy-MM-dd");

    public almacen() {
    }

    public String getProducto() {
        return producto;
    }

    public void setProducto(String producto) {
        this.producto = producto;
    }

    public String getFechaAux() {
        return fechaAux;
    }

    public void setFechaAux(String fechaAux) {
        this.fechaAux = fechaAux;
    }

    public int getPrecio() {
        return precio;
    }

    public void setPrecio(int precio) {
        this.precio = precio;
    }

    public double getCantidad() {
        return cantidad;
    }

    public void setCantidad(double cantidad) {
        this.cantidad = cantidad;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }
    
    public void Total()
    {
        setTotal(precio*cantidad);
        try{
            setFecha(f.parse(fechaAux));
        }
        catch(Exception e){
            
        }
    }
}