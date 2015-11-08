<?php	
	# Declaracion de las variables que almacenaran los datos de la calculadora
	$valor_a = $_POST['valor_a'];
	$valor_b = $_POST['valor_b'];
	$operacion = $_POST['operacion'];
	$resultado = $_POST['resultado'];

	# Conectarnos con el motor de bd
	$conexion = mysql_connect("localhost", "root", "") 
		or die("Fallo en la conexion con el motor de bd.");
		
	# Seleccionar base de datos
	mysql_select_db("calculadora", $conexion)
		or die("Seleccion de la base de datos fallida.");
		
	# Realizamos la insercion de datos a la BD
	mysql_query("INSERT INTO resultados_calc (valor_a, valor_b, operacion, resultado) 
		VALUES (" . $valor_a . ", " . $valor_b . ", '" . $operacion . "', " . $resultado . ")")
		or die("Insercion fallida.");
		
	# Cerrar siempre la BD
	mysql_close($conexion);
?>
