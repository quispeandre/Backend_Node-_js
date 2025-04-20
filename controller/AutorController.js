import * as Autor from '../model/AutorModel.js';
export const obtenerAutores=async(req,res)=>{
    try{
        const autor= await Autor.obtenerTodosAutores();
        res.status(200).json(autor);
    }catch(error){
        res.status(500).json({message:'Error al obtener autores',error:error.message});
    }
}
export const crearAutor = async(req,res)=>{
    try{
        const {nombre,nacionalidad,fecha_nacimiento,biografia}=req.body;
        const newAutor=await Autor.crearNuevoAutor(nombre,nacionalidad,fecha_nacimiento,biografia);
        res.status(201).json({id:newAutor,message:'Autor creado'});
    }catch(error){
        res.status(500).json({message:'Error al cargar el autor',error:error.message});
    }
}
export const ActualizarNuevoAutor = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        

        if (isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido o no proporcionado' });
        }

        const buscar = await Autor.buscarAutor(id);
        if (!buscar) return res.status(404).json({ message: 'Autor no encontrado' });

        await Autor.ActualizarAutor(id, req.body.nombre, req.body.nacionalidad, req.body.fecha_nacimiento, req.body.biografia);
        res.status(200).json({ message: 'Autor actualizado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el Autor', error: error.message });
    }
};

export const EliminarAutores=async(req,res)=>{
    try{
        const id = parseInt(req.params.id);
        const buscar=await Autor.buscarAutor(id);
        if(!buscar) return res.status(404).json({message:'Autor no encontrado'});
        await Autor.EliminarAutor(id);
        res.status(200).json({message:'Autor eliminado correctamente'});

    }catch(error){
        console.error(error);
        res.status(500).json({message:'Error al eliminar el Autor',error:error.message});
    } 
    
}
export const librosAutor=async(req,res)=>{
    try{
        const id= req.params.id;
        const buscar=await Autor.buscarAutor(id);
        if(!buscar) return res.status(404).json({message:'Autor no encontrado'});
        const libros=await Autor.LibrosAutor(id);
        
        res.status(200).json(libros);
    }catch(error){
        console.error(error);
    }
}