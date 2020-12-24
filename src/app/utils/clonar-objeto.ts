export function clonarObjeto(objeto : any ) : any {
  return JSON.parse(JSON.stringify(objeto))
}
