import pool from "../config/db.js";

export const obtenerTodosAutores=async()=>{
    const [array]= await pool.query('SELECT * FROM autor');
    return array;
}
export const crearNuevoAutor=async(nombre,nacionalidad,fecha_nacimiento,biografia)=>{
    const [resultado]= await pool.query('INSERT INTO autor(nombre,nacionalidad,fecha_nacimiento,biografia) VALUES(?,?,?,?)',[nombre,nacionalidad,fecha_nacimiento,biografia]);
    return resultado.insertId;
}
export const ActualizarAutor=async(id_autor,nombre,nacionalidad,fecha_nacimiento,biografia)=>{
    await pool.query('UPDATE autor SET nombre=?,nacionalidad=?,fecha_nacimiento=?,biografia=? WHERE id_autor = ?',[nombre,nacionalidad,fecha_nacimiento,biografia,id_autor]);
}
export const buscarAutor=async(id_autor)=>{
    const [array]=await pool.query('SELECT * FROM autor WHERE id_autor=?',[id_autor]);
    return array[0];
}
export const EliminarAutor=async(id)=>{
    await pool.query('DELETE FROM autor WHERE id_autor=?',[id]);
}
export const LibrosAutor=async(id)=>{
    const [libros]= await pool.query('SELECT l.* FROM libro l WHERE l.id_autor=?',[id]);
    return libros;
}