function Promocion () {
    return(
        <>
        <h1>Promociones</h1>
          <div>
            <div className='Nomdesc'>
              <h5>Nombre del Descuento</h5>
              <input type="text" placeholder="" className="Nompromo"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-toggle-on" viewBox="0 0 16 16">
              <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
              </svg>Descuento con cupón
                <div className='modiftext'>Configura opcionalmente un código de cupón para activar la promocion</div>
                  <div className= 'Descripcupon'>
                    <div>
                      <h6>Nombre</h6>
                      <input type="text" placeholder="Ej: 1C9148" className="Nomcupon"/>
                    </div>
                      <div>
                        <h6>Límite total de consumo</h6>
                          <div className= 'limiconsu'>
                            <input type="number" placeholder="0" required clsName="btninfi2"/>
                            <div className='infinito'>
                              <div>
                              <button className='btninfi'>∞</button>
                              </div>
                            </div>
                          </div>
                      </div>
                        <div>
                        <h6>Veces Usado</h6>
                        <h6>0</h6>
                      </div>
                  </div>
                    <hr/>
                                 <div className= 'Descripcupon'>
              <div>
             <input type="text" placeholder="Ej: 1C9148" className="Nomcupon"/>
             </div>
             
             <div>
             <div className= 'limiconsu'>
              <input type="number" placeholder="0" required clsName="btninfi2"/>
              <div className='infinito'>
                <div>
                <button className='btninfi'>∞</button>
                </div>
                </div>
                </div>
              </div>

               <div>
             <div className= 'limiconsu'>
              <input type="number" placeholder="0" required/>
              <div className='infinito'>
                <div>
                <button className='btninfi'>∞</button>
                </div>
                </div>
                </div>
              </div>
             

             <div>
              <h6 className='trash'>0</h6>
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
             <hr/>
             </div>
             <div className='cupons'>
             <h6 className='textcupons'>Tienes 2 cupones</h6>
             <div>
              <button>Agregar cupones</button>
             </div>
              </div>
            




            </div>

             <div className='Nomdesc'>
            <h5>Descuento</h5>
            <div className = 'monto'>
              <div>
            <h6>Tipo</h6>
            <select required>
            <option value="">COP</option>
            <option value="granos">Porcentaje</option>
          </select>
          </div>
            
            <div >
                <h6>Monto</h6>
              <input type="number" placeholder="0" required/>
          </div>
          </div>
          <div>
            <label>
          <input type="checkbox"/>
          Acumulativa
          </label>
          </div>
          El descuento será acumulado sobre cualquier otro descuento descuento activo acumulable.
            </div>

            <div className='Nomdesc'>
              <h5>Clientes</h5>
              <h6>Aplicar a:</h6>
              <select required>
            <option value="">Todos</option>
            <option value="granos">Clientes No registrados</option>
            <option value="granos">Clientes Registrados</option>
            <option value="granos">No registrado</option>
            </select>
          </div>

              <div className='Nomdesc'>
                <h5>Límites</h5>
                <div className='monto'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
                </svg><h6>Fecha Límite</h6>
                </div>
                <input type="date" id="start-date" />
                <div className='modiftext'>El descuento puede ser válido para siempre o puede establecer las fechas específicas de duración.</div>
                <div>
                  <div className='monto'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
                </svg><h6>Límite de Uso</h6></div>
                <input type="number" placeholder="0" required />
                Especifique cuántas veces se puede utilizar el descuento.
                </div>
              </div>
            </div>
        </>
    )
}
export default Promocion