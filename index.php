
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="mystyle.css">
    <title>Oblíbené ovoce našich zaměstnanců</title>
</head>
<body>
    <div class="wrapper">


    </div>
    <?php $pole = array(
        array( "Alena", "Novakova", 1852, array( "jablko", "pomeranc", "broskev" ) ),
        array( "Jitka", "Mala", 1952, array( "pomeranc", "datle" ) ),
        array( "Petra", "Liskova", 1963, array( "pomeranc", "jablko" ) ),
        array( "Alena", "Svobodova", 1977, array( "kiwi", "tresne" ) ),
        array( "Milana", "Novakova", 1852, array( "jablko", "pomeranc", "broskev" ) ),
        array( "Ivan", "Novak", 1992, array( "pomeranc", "broskev" ) ),
        array( "Stanislava", "Liskova", 1963, array( "pomeranc" ) ),
        array( "Petr", "Jungmann", 1982, array( "datle", "visne", "jablko" ) ),
        array( "Milan", "Drobny", 1942, array( "kiwi", "meloun" ) ),
        array( "David", "Hofman", 1972, array( "banan", "datle", "tresne" ) ),
        array( "Petr", "Kaiser", 1986, array( "banan", "jablko" ) ),
        array( "Adam", "Neuman", 1973, array( "tresne" ) ),
        array( "Milan", "Kamen", 1879, array( "jablko", "pomeranc", "meloun" ) ),
        array( "Ivana", "Novakova", 1991, array( "broskev", "tresne" ) ),
        array( "Stanislav", "Liska", 1961, array( "kiwi", "broskev" ) ),
        array( "Pavla", "Herrmannova", 1993, array( "banan", "visne" ) )
    ); ?>

    <script>
    var pole = JSON.parse('<?= addslashes(json_encode($pole)) ?>');
   
   /* SKORO PATIČKA */
   /*
    for(i = 0; i < pole.length; i++){
    pole[i][3] = pole[i][3].map(function(item) { return item == "pomeranc" ? "mandarinka" : item; });
    console.log(pole[i][3])}*/
    </script> 
    <script src="myscript.js">
    </script>
</body>
</html>