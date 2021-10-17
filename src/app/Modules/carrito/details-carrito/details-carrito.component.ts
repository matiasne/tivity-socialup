import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Modules/clientes/cliente';
import { ComerciosService } from 'src/app/Modules/comercio/comercios.service';
import { EditClientePage } from 'src/app/edit-cliente/edit-cliente.page';
import { Pedido } from 'src/app/models/pedido';
import { Comercio } from 'src/app/models/comercio';
import { EnumTipoDescuento } from 'src/app/models/descuento';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ToastService } from 'src/app/Services/toast.service';
import { ImpresoraService } from '../../impresion/impresora.service';
import { ModalNotificacionService } from 'src/app/Services/modal-notificacion.service';
import { CarritoService } from '../carrito.service';
import { SelectClientePage } from 'src/app/select-cliente/select-cliente.page';
import { Division } from 'src/app/models/subdivision';
import { SelectDivisionPage } from 'src/app/select-division/select-division.page';
import { ModalInputDireccionPage } from 'src/app/modal-input-direccion/modal-input-direccion.page';
import { Localizacion } from 'src/app/models/localizacion';
import { FormCobrarPedidoPage } from 'src/app/form-cobrar-pedido/form-cobrar-pedido.page';

@Component({
  selector: 'app-details-carrito',
  templateUrl: './details-carrito.component.html',
  styleUrls: ['./details-carrito.component.scss'],
})
export class DetailsCarritoComponent implements OnInit {

  
  public carrito = new Pedido();
  public comercio:Comercio;
  public subsComercio: Subscription;
  public subsCarrio:Subscription;
  
  public impresora
  public enumTipo = EnumTipoDescuento

  constructor(
    public authenticationService:AuthenticationService,
    public carritoService:CarritoService,
    private navCtrl: NavController,
    public modalController: ModalController,
    public comerciosService:ComerciosService,
    private toastServices:ToastService,
    private impresoraService:ImpresoraService,
    
    private route:ActivatedRoute,
    private router:Router,
    
    private alertController:AlertController,
    private modalNotificacion:ModalNotificacionService
  ) {
    this.comercio = new Comercio();
    this.carrito = new Pedido(); 


    this.comerciosService.getSelectedCommerce().subscribe(data=>{
      this.comercio.asignarValores(data)
      console.log(this.comercio)    
    })
   

   // this.back = this.route.snapshot.params.carritoIntended;

   
    this.subsCarrio = this.carritoService.getActualCarritoSubs().subscribe(data=>{
      this.carrito = data;  
      
    })    
  }  



  ionViewDidEnter(){
    
  }

  ngOnInit() {
    
  } 

  ionViewDidLeave(){
    this.subsCarrio.unsubscribe();   
  } 

  atras(){
    this.modalController.dismiss()
  }

  async cancelar(){
    this.modalController.dismiss();
  }


  continuar(){ 

    if(this.carrito.items.length == 0){
      this.toastServices.alert("Debes ingresar al menos un producto o servicio","");      
      return;
    }        
    
    this.crearPedido();       
  }

 

  crearPedido(){
    this.imprimir()   
    this.carritoService.crearPedido()
    this.modalController.dismiss("vacio")
  }  

  imprimir(){
    this.impresoraService.impresionComanda(this.carrito);
  }

  eliminarDescuento(i){
    this.carritoService.eliminarDescuento(i);
    this.toastServices.mensaje("Descuento eliminado!","");
  }

  eliminarRecargo(i){
    this.carritoService.eliminarRecargo(i);
    this.toastServices.mensaje("Recargo eliminado!","");
  }

  eliminarProducto(i){
    this.carritoService.eliminarProducto(i); 
    if(this.carrito.items.length == 0 && this.carrito.descuentos.length == 0 && this.carrito.recargos.length == 0){
      this.navCtrl.back()
    }
    this.modalNotificacion.trash("Eliminado del pedido","El producto "+i.nombre+" ha sido eliminado del pedido") 
  }

  eliminarCliente(){
    this.carritoService.setearCliente(new Cliente());
    this.toastServices.mensaje("Cliente desasignado!","");
  }

  eliminarSubdivision(){
    this.carritoService.setearDivision(new Division());
    this.toastServices.mensaje("Mesa desasiganada!","");
  }

  

  async seleccionarCliente(){
    const modal = await this.modalController.create({
      component: SelectClientePage,
      cssClass:'modal-custom-wrapper',      
    });
    
    modal.present().then(()=>{
    

    })

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){
        if(retorno.data == "nuevo"){
          this.abrirNuevoCliente();
        }
        if(retorno.data != "nuevo"){
          this.toastServices.mensaje("Cliente Agregado!","");
          this.carritoService.setearCliente(retorno.data);
        }   
      }
           
    });
    return await modal.present();
  }

  async abrirNuevoCliente(){
    const modal = await this.modalController.create({
      component: EditClientePage,
      cssClass:'modal-custom-wrapper',      
    });    
    modal.present().then(()=>{
    })

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data){    
        this.carritoService.setearCliente(retorno.data);
      }           
    });
    return await modal.present();
  }

  async seleccionarDivision(){
    const modal = await this.modalController.create({
      component: SelectDivisionPage,
      cssClass:'modal-custom-wrapper',      
    });

    modal.present().then(()=>{
      
    })

    modal.onDidDismiss()
    .then((retorno) => {
        this.carritoService.setearDivision(retorno.data);
      });
    return await modal.present();
  }

  async preguntarVaciar(){
    const alert = await this.alertController.create({
      header: 'Está seguro que desea vaciar todo el carrito?',
      message: '',
      buttons: [
        { 
          text: 'No',
          handler: (blah) => {
            
          }
        }, {
          text: 'Si',
          handler: () => {           
            this.carritoService.vaciar()   
            this.modalNotificacion.trash("Vaciado","El carrito ahora se encuentra completamente vacío.")      
          }
        }
      ]
    });
    await alert.present();   
  }

  async seleccionarUbicacion(){
    const modal = await this.modalController.create({
      component: ModalInputDireccionPage,
      componentProps:{localizacion:this.carrito.direccion},
      cssClass:'modal-map' 
    });
    modal.onDidDismiss()
    .then((retorno) => {
      
      if(retorno.data){
        this.carrito.direccion = retorno.data;
      }
      console.log(this.carrito)
    });
    modal.present()
  }

  eliminarDireccion(){
    this.carrito.direccion = new Localizacion();
  }

  cerrar(){
    this.modalController.dismiss()
  }

  async cobrar(){
    this.carrito.comanda.numero = await this.comerciosService.obtenerActualizarNumeroPedido()
    const modal = await this.modalController.create({
      id:'form-cobrar',
      component: FormCobrarPedidoPage,  
      componentProps:{pedido:this.carrito,comercio:this.comercio},   
      cssClass:'modal-custom-wrapper' 
    });    

    modal.onDidDismiss()
    .then((retorno) => {
      if(retorno.data == "cobrado"){
       
        this.modalController.dismiss(null,null,'details-carrito') 
       
        
      }
     
    });
    return await modal.present();
  }

  
}

