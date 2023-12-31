/* Hooks */
import { useState } from 'react';
/* React Roter */
import { useNavigate } from 'react-router-dom';
/* Model */
import { postData } from '../model/videoModel';

export const NuevaCategoria = () => {
	const navigate = useNavigate();
	const [color, setColor] = useState('#000000');
	const [nombre, setNombre] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		let data = {
			nombre,
			descripcion,
			color
		};
		postData('/categorias', data).then(response => navigate('/allcategorias'));
	};

	return (
		<section className='bg-fondoPrincipal w-full h-screen p-8 flex justify-center items-center'>
			<form
				onSubmit={handleSubmit}
				className='w-1/2 h-1/2 bg-fondoVideo shadow-md rounded p-10'>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='nombre'>
						Nombre
					</label>
					<input
						required={true}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='nombre'
						value={nombre}
						onChange={e => {
							setNombre(e.target.value);
						}}
						type='text'
						placeholder='Nombre'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='descripcion'>
						Descripcion
					</label>
					<input
						required={true}
						className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='descripcion'
						value={descripcion}
						onChange={e => {
							setDescripcion(e.target.value);
						}}
						type='text'
						placeholder='Descripcion'
					/>
				</div>
				<div className='mb-4'>
					<label
						className='block text-gray-700 text-sm font-bold mb-2'
						htmlFor='color'>
						Color
					</label>
					<input
						required={true}
						className='h-8 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						id='color'
						type='color'
						value={color}
						onChange={e => {
							setColor(e.target.value);
						}}
					/>
				</div>
				<div className='flex flex-col justify-center items-center p-8'>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
						Crear Categoria
					</button>
				</div>
			</form>
		</section>
	);
};
