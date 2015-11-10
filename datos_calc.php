<html>
<head>
	<title>Aviso</title>
	<link rel="shortcut icon" href="./img/Univalle.ico">
</head>
<body>
	<?php	
		# Declaracion de las variables que almacenaran los datos de la calculadora
		$valor_a = $_POST['valor_a'];
		$valor_b = $_POST['valor_b'];
		$operacion = $_POST['operacion'];
		$resultado = $_POST['resultado'];

		# Conectamos con el motor de bd y seleccionamos la bd
		$mysqli = mysqli_connect("localhost", "root", "", "calculadora") 
			or die("Fallo en la conexion con el motor de bd.");
			
		# Creamos la sentencia SQL para la ejecucion
		$consulta = "INSERT INTO resultados_calc (valor_a, valor_b, operacion, resultado) VALUES (?,?,?,?)";
		
		# Preparamos la consulta
		$sentencia = $mysqli->prepare($consulta);
		
		# Agregamos las variables como parametros a ejecutar la consulta. 
		# Notese que el primer parametro es una cadena de texto, donde cada letra determina que tipo de valor se ingresara a la BD como parametro.
		# En esta consulta, las variables valor_a, valor_b, operacion, resultado son d, d, s, d respectivamente (d: double, s: string).
		$sentencia->bind_param("ddsd", $valor_a, $valor_b, $operacion, $resultado);
		
		# Ejecutamos la sentencia
		$sentencia->execute();
		
		# Cerrar siempre la sentencia ejecutada contra la alteracion indeseada de datos
		$sentencia->close();
			
		# Cerrar siempre la BD
		$mysqli->close();
		
		# Mensaje de exito
		echo "<h4>Inserci&oacuten exitosa</h4>";
	?>
	
	<!--Volvemos al archivo "Calculadora.html"-->
	<form action="Calculadora.html">
		<input type="submit" value="Volver">
	</form>
</body>
</html>
