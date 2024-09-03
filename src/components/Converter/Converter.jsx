import { useState } from 'react';
import Validator from '../../Validator/Validator';
import './converter.css';

const Converter = () => {
	const [colorItem, getColor] = useState('');

	const onValueChange = (e) => {
		const value = e.target.value;

		// Проверяем, что длина введённого значения равна 7 символам
		if (value.length === 7) {
			const rgbColor = Validator(value);
			
			// Если валидный цвет, обновляем состояние, иначе показываем ошибку
			if (rgbColor !== "Ошибка!") {
				getColor(rgbColor);
			} else {
				getColor("Ошибка!");
			}		
		} else {
			// Если длина не равна 7, не меняем состояние
			if (value.length > 0) {
				getColor(''); 
			}
		}
	}

	return (
		<div className="container" style={{backgroundColor: colorItem !== "Ошибка!" ? colorItem : '#e94b35'}}>
			<div className="color-item"  >
				<form className="color">
					<input className="color-hex" 
					onChange={onValueChange} 
					type="text" 
					name="color" 
					placeholder="#RRGGBB"/>
				</form>

				<div className="color-rgb" 
				style={{backgroundColor: colorItem !== "Ошибка!" ? colorItem : '#e94b35'}}>{colorItem === "Ошибка!" ? "Ошибка!" : colorItem}</div>
			</div>
		</div>
	)
};

export default Converter;