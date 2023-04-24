import { Recipe } from '@/types/recipe';

export const recipes: Recipe[] = [
  {
    name: 'Ensalada de quinoa y aguacate',
    username: 'chefjulia',
    images: [
      'https://ik.imagekit.io/czvxqgafa/images/posts/ensalada_quinoa_aguacate.jpg',
    ],
    description:
      'Una receta saludable y fácil de preparar para una cena ligera.',
    date: new Date('2023-04-23T19:00:00.000Z'),
    tags: ['ensalada', 'quinoa', 'aguacate', 'vegetariano'],
    difficulty: 'Fácil',
    cookTime: 30,
    ingredients: [
      { name: 'quinoa', quantity: 1, unit: 'taza' },
      { name: 'aguacate', quantity: 2, unit: 'unidades' },
      { name: 'tomate cherry', quantity: 1, unit: 'taza' },
      { name: 'cebolla morada', quantity: 1, unit: 'unidad' },
      { name: 'pimiento rojo', quantity: 1, unit: 'unidad' },
      { name: 'limón', quantity: 1, unit: 'unidad' },
      { name: 'aceite de oliva', quantity: 2, unit: 'cucharadas' },
      { name: 'sal', quantity: 1, unit: 'pizca' },
      { name: 'pimienta negra', quantity: 1, unit: 'pizca' },
    ],
    instructions: [
      'Enjuagar la quinoa bajo agua fría y escurrir.',
      'Colocar la quinoa en una olla con dos tazas de agua y sal al gusto. Cocinar a fuego medio hasta que la quinoa esté cocida, aproximadamente 15 minutos.',
      'Mientras tanto, picar la cebolla, el pimiento y el tomate cherry. Cortar los aguacates en cubos y rociar con limón para evitar que se oxiden.',
      'Una vez cocida la quinoa, dejar enfriar.',
      'Mezclar la quinoa con los vegetales picados y el aceite de oliva.',
      'Agregar sal y pimienta al gusto.',
      'Servir frío y disfrutar!',
    ],
    saves: ['saludablexsiempre', 'comidafit', 'cocineroencasa'],
    likes: ['chefpepe', 'saludablexsiempre', 'comidafit', 'cocineroencasa'],
    valoration: 4,
    valorations: [
      {
        username: 'saludablexsiempre',
        comment: 'Muy rica y fácil de preparar. Además, es súper saludable!',
        rating: 4,
        date: new Date('2023-04-23T20:00:00.000Z'),
        comments: [
          {
            username: 'comidafit',
            comment:
              'La ensalada de quinoa es mi favorita y esta receta no decepciona.',
            date: new Date('2023-04-23T21:00:00.000Z'),
          },
          {
            username: 'cocineroencasa',
            comment: 'Le agregué un poco de queso feta y quedó deliciosa!',
            date: new Date('2023-04-24T10:00:00.000Z'),
          },
        ],
      },
    ],
  },
  {
    name: 'Pollo al horno con limón y hierbas',
    username: 'chefpepe',
    images: [
      'https://ik.imagekit.io/czvxqgafa/images/posts/pollo_al_limon.jpg',
    ],
    description:
      'Una receta deliciosa y fácil de preparar para el almuerzo o cena.',
    date: new Date('2022-10-15T15:30:00.000Z'),
    tags: ['pollo', 'horno', 'limón', 'hierbas'],
    difficulty: 'Fácil',
    cookTime: 60,
    ingredients: [
      { name: 'pollo entero', quantity: 1, unit: 'unidad' },
      { name: 'limón', quantity: 2, unit: 'unidad' },
      { name: 'tomillo fresco', quantity: 2, unit: 'ramas' },
      { name: 'romero fresco', quantity: 2, unit: 'ramas' },
      { name: 'ajo', quantity: 3, unit: 'dientes' },
      { name: 'aceite de oliva', quantity: 2, unit: 'cucharadas' },
      { name: 'sal', quantity: 1, unit: 'pizca' },
      { name: 'pimienta negra', quantity: 1, unit: 'pizca' },
    ],
    instructions: [
      'Precalentar el horno a 200°C.',
      'Lavar y secar el pollo, y salpimentarlo por dentro y por fuera.',
      'Colocar en una fuente para horno y reservar.',
      'Exprimir el jugo de un limón en un tazón y mezclar con el aceite de oliva y las hierbas picadas.',
      'Verter la mezcla sobre el pollo y frotar para cubrirlo bien.',
      'Cortar el otro limón en rodajas y colocarlas dentro del pollo.',
      'Introducir los dientes de ajo pelados y enteros en la fuente.',
      'Hornear durante 50-60 minutos o hasta que el pollo esté dorado y cocido por completo.',
      'Retirar del horno y dejar reposar durante 5-10 minutos antes de cortar y servir.',
    ],
    saves: ['comidista', 'cocinillas', 'gastrolover'],
    likes: ['comidista', 'cocinillas', 'gastrolover'],
    valoration: 4.5,
    valorations: [
      {
        username: 'comidista',
        comment:
          'Esta receta es genial, la he preparado varias veces y siempre queda perfecta.',
        rating: 5,
        date: new Date('2022-10-16T09:15:00.000Z'),
        comments: [
          {
            username: 'cocinillas',
            comment: 'Estoy deseando probarla, tiene una pinta estupenda.',
            date: new Date('2022-10-16T12:30:00.000Z'),
          },
          {
            username: 'gastrolover',
            comment:
              'Yo la hice con pollo deshuesado y quedó delicioso también.',
            date: new Date('2022-10-17T14:00:00.000Z'),
          },
        ],
      },
    ],
  },
  {
    name: 'Pastel de zanahoria y nueces',
    username: 'chefjulia',
    images: [
      'https://ik.imagekit.io/czvxqgafa/images/posts/pastel_zanahoria.jpg',
    ],
    description:
      'Un pastel delicioso y húmedo con el sabor dulce de la zanahoria y la textura crujiente de las nueces.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['pastel', 'zanahoria', 'nueces', 'postre'],
    difficulty: 'Inter',
    cookTime: 90,
    ingredients: [
      { name: 'zanahoria rallada', quantity: 3, unit: 'tazas' },
      { name: 'harina de trigo', quantity: 2, unit: 'tazas' },
      { name: 'azúcar morena', quantity: 3 / 2, unit: 'tazas' },
      { name: 'huevos', quantity: 4, unit: 'unidades' },
      { name: 'aceite vegetal', quantity: 5 / 4, unit: 'tazas' },
      { name: 'nueces picadas', quantity: 3 / 2, unit: 'tazas' },
      { name: 'canela molida', quantity: 3 / 2, unit: 'cucharaditas' },
      { name: 'bicarbonato de sodio', quantity: 1, unit: 'cucharadita' },
      { name: 'polvo para hornear', quantity: 1, unit: 'cucharadita' },
      { name: 'sal', quantity: 1 / 2, unit: 'cucharadita' },
    ],
    instructions: [
      'Precalentar el horno a 180°C y engrasar un molde para pastel.',
      'En un tazón grande, mezclar la harina, el bicarbonato de sodio, el polvo para hornear, la canela y la sal.',
      'En otro tazón grande, batir los huevos y agregar gradualmente el aceite y el azúcar hasta que se combinen.',
      'Agregar la mezcla de harina a la mezcla de huevo en tandas, revolviendo hasta que se combinen.',
      'Agregar la zanahoria rallada y las nueces picadas a la mezcla y revolver bien.',
      'Verter la mezcla en el molde para pastel preparado y hornear durante 50-60 minutos o hasta que un palillo insertado en el centro del pastel salga limpio.',
      'Retirar del horno y dejar enfriar durante 10 minutos antes de sacar del molde.',
      'Decorar con una capa de crema de queso si lo desea y servir.',
    ],
    saves: ['cocineroapasionado', 'gastrolover'],
    likes: ['cocineroapasionado', 'gastrolover'],
    valoration: 4.8,
    valorations: [
      {
        username: 'cocineroapasionado',
        comment:
          'Este pastel es delicioso, la mezcla de zanahoria y nueces es genial',
        rating: 5,
        date: new Date('2023-04-25T09:15:00.000Z'),
        comments: [
          {
            username: 'gastrolover',
            comment: 'Me encanta la zanahoria, voy a probarlo.',
            date: new Date('2023-04-25T12:30:00.000Z'),
          },
          {
            username: 'comidista',
            comment:
              'Yo lo hice con zanahoria rallada y zanahoria en puré y quedó delicioso.',
            date: new Date('2023-04-26T14:00:00.000Z'),
          },
        ],
      },
    ],
  },
  {
    name: 'Tarta de queso con frutos rojos',
    username: 'chefjulia',
    images: ['https://ik.imagekit.io/czvxqgafa/images/posts/tarta_queso.jpg'],
    description:
      'Una tarta de queso con un delicioso relleno de queso crema y frutos rojos.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['tarta', 'queso', 'frutos rojos', 'postre'],
    difficulty: 'Inter',
    cookTime: 90,
    ingredients: [
      { name: 'harina de trigo', quantity: 1, unit: 'taza' },
      { name: 'azúcar morena', quantity: 1 / 2, unit: 'taza' },
      { name: 'mantequilla', quantity: 1 / 2, unit: 'taza' },
      { name: 'huevos', quantity: 2, unit: 'unidades' },
      { name: 'queso crema', quantity: 1, unit: 'taza' },
      { name: 'azúcar en polvo', quantity: 1 / 2, unit: 'taza' },
      { name: 'leche', quantity: 1 / 2, unit: 'taza' },
      { name: 'extracto de vainilla', quantity: 1, unit: 'cucharadita' },
      { name: 'frutos rojos', quantity: 1, unit: 'taza' },
    ],
    instructions: [
      'Precalentar el horno a 180°C y engrasar un molde para pastel.',
      'En un tazón grande, mezclar la harina, el azúcar morena y la mantequilla hasta que se combinen.',
      'Agregar los huevos uno a la vez, revolviendo bien después de cada adición.',
      'Verter la mezcla en el molde para pastel preparado y hornear durante 20-25 minutos o hasta que un palillo insertado en el centro del pastel salga limpio.',
      'Retirar del horno y dejar enfriar durante 10 minutos antes de sacar del molde.',
      'En un tazón grande, mezclar el queso crema, el azúcar en polvo, la leche y el extracto de vainilla hasta que se combinen.',
      'Verter la mezcla sobre la base de galletas y esparcir los frutos rojos sobre la superficie.',
      'Hornear durante 20-25 minutos o hasta que el queso esté ligeramente dorado.',
      'Retirar del horno y dejar enfriar durante 10 minutos antes de servir.',
    ],
    saves: ['cocineroapasionado', 'gastrolover', 'comidista'],
    likes: ['cocineroapasionado', 'gastrolover'],
    valoration: 4.8,
    valorations: [
      {
        username: 'cocineroapasionado',
        comment: 'Este pastel es delicioso, mis dieces para esta receta',
        rating: 5,
        date: new Date('2023-04-25T09:15:00.000Z'),
        comments: [
          {
            username: 'gastrolover',
            comment: 'Me encantan los frutos rojos, voy a probarlo.',
            date: new Date('2023-04-25T12:30:00.000Z'),
          },
        ],
      },
    ],
  },
  {
    name: 'Filete de salmón con salsa de limón',
    username: 'alberto1992',
    images: ['https://ik.imagekit.io/czvxqgafa/images/posts/filete_salmon.jpg'],
    description:
      'Un filete de salmón con una deliciosa salsa de limón y un toque de pimienta.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['salmón', 'limón', 'pimienta', 'pescado', 'salsa'],
    difficulty: 'Inter',
    cookTime: 30,
    ingredients: [
      { name: 'filete de salmón', quantity: 1, unit: 'unidades' },
      { name: 'limón', quantity: 1, unit: 'unidades' },
      { name: 'pimienta', quantity: 1, unit: 'cucharadita' },
      { name: 'aceite de oliva', quantity: 1, unit: 'cucharada' },
      { name: 'sal', quantity: 1, unit: 'cucharadita' },
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En un tazón pequeño, mezclar el jugo de limón, la pimienta, el aceite de oliva y la sal hasta que se combinen.',
      'Poner el filete de salmón en una bandeja para hornear y verter la mezcla sobre el salmón.',
      'Hornear durante 15-20 minutos o hasta que el salmón esté cocido.',
      'Retirar del horno y servir.',
    ],
    saves: ['chefjulia', 'gastrolover'],
    likes: ['chefjulia', 'gastrolover', 'kitchenlover'],
    valoration: 4.5,
    valorations: [
      {
        username: 'cocineroapasionado',
        comment: 'Me encanta el salmón, voy a probarlo.',
        rating: 5,
        date: new Date('2023-04-25T09:15:00.000Z'),
        comments: [],
      },
      {
        username: 'gastrolover',
        comment:
          'Esta receta es muy fácil de hacer y el resultado es delicioso.',
        rating: 4,
        date: new Date('2023-04-25T12:30:00.000Z'),
        comments: [],
      },
    ],
  },
  // Receta dificil
  {
    name: 'Codillo de cerdo al horno',
    username: 'ximena',
    images: ['https://ik.imagekit.io/czvxqgafa/images/posts/codillo_cerdo.jpg'],
    description:
      'Un codillo de cerdo al horno con una deliciosa salsa de tomate y cebolla.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['codillo', 'cerdo', 'tomate', 'cebolla', 'salsa'],
    difficulty: 'Difícil',
    cookTime: 120,
    ingredients: [
      { name: 'codillo de cerdo', quantity: 1, unit: 'unidades' },
      { name: 'cebolla', quantity: 1, unit: 'unidades' },
      { name: 'tomate', quantity: 1, unit: 'unidades' },
      { name: 'ajo', quantity: 2, unit: 'dientes' },
      { name: 'aceite de oliva', quantity: 1, unit: 'cucharada' },
      { name: 'sal', quantity: 1, unit: 'cucharadita' },
      { name: 'pimienta', quantity: 1, unit: 'cucharadita' },
      { name: 'azúcar', quantity: 1, unit: 'cucharadita' },
      { name: 'vino blanco', quantity: 1, unit: 'taza' },
      { name: 'agua', quantity: 1, unit: 'taza' },
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En una olla grande, calentar el aceite de oliva a fuego medio.',
      'Agregar la cebolla y cocinar durante 5 minutos o hasta que esté transparente.',
      'Agregar el tomate, el ajo, la sal, la pimienta y el azúcar y cocinar durante 5 minutos o hasta que el tomate esté suave.',
      'Agregar el vino blanco y cocinar durante 5 minutos o hasta que el vino se haya reducido a la mitad.',
      'Agregar el agua y el codillo de cerdo y cocinar durante 1 hora o hasta que el codillo esté tierno.',
      'Retirar del fuego y dejar enfriar durante 10 minutos antes de servir.',
    ],
    saves: ['pinchechef', 'chefmaster'],
    likes: ['pinchechef', 'chefmaster', 'kitchenlover'],
    valoration: 4.5,
    valorations: [
      {
        username: 'pinchechef',
        comment: 'Me encanta el codillo de cerdo, voy a probarlo.',
        rating: 5,
        date: new Date('2023-04-25T09:15:00.000Z'),
        comments: [],
      },
      {
        username: 'chefmaster',
        comment: 'Tiene muy buena pinta, voy a probarlo.',
        rating: 4,
        date: new Date('2023-04-25T12:30:00.000Z'),
        comments: [],
      },
    ],
  },
  {
    name: 'Pechuga de pollo rellena',
    username: 'pinchechef',
    images: ['https://ik.imagekit.io/czvxqgafa/images/posts/pechuga_pollo.jpg'],
    description:
      'Una pechuga de pollo rellena con una deliciosa mezcla de queso y jamón.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['pollo', 'jamón', 'queso', 'relleno'],
    difficulty: 'Inter',
    cookTime: 60,
    ingredients: [
      { name: 'pechuga de pollo', quantity: 1, unit: 'unidades' },
      { name: 'jamón', quantity: 1, unit: 'taza' },
      { name: 'queso', quantity: 1, unit: 'taza' },
      { name: 'aceite de oliva', quantity: 1, unit: 'cucharada' },
      { name: 'sal', quantity: 1, unit: 'cucharadita' },
      { name: 'pimienta', quantity: 1, unit: 'cucharadita' },
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En un tazón pequeño, mezclar el jamón y el queso hasta que se combinen.',
      'Cortar un bolsillo en el centro de la pechuga de pollo y rellenar con la mezcla de jamón y queso.',
      'Poner la pechuga de pollo en una bandeja para hornear y verter el aceite de oliva sobre el pollo.',
      'Hornear durante 45-50 minutos o hasta que el pollo esté cocido.',
      'Retirar del horno y servir.',
    ],
    saves: ['pinchechef', 'chefmaster'],
    likes: ['pinchechef', 'chefmaster', 'kitchenlover'],
    valoration: 5,
    valorations: [
      {
        username: 'quiencocina',
        comment: 'Me encanta el pollo, voy a probarlo.',
        rating: 5,
        date: new Date('2023-04-25T09:15:00.000Z'),
        comments: [
          {
            username: 'pinchechef',
            comment: 'Gracias por tu comentario.',
            date: new Date('2023-04-25T09:15:00.000Z'),
          },
        ],
      },
    ],
  },
  {
    name: 'Pizza carbonara',
    username: 'pinchechef',
    images: [
      'https://ik.imagekit.io/czvxqgafa/images/posts/pizza_carbonara.jpg',
    ],
    description: 'Una pizza perfecta para los amantes de la pasta carbonara.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['pizza', 'carbonara', 'queso', 'huevo', 'tocino'],
    difficulty: 'Inter',
    cookTime: 30,
    ingredients: [
      { name: 'harina', quantity: 1, unit: 'taza' },
      { name: 'levadura', quantity: 1, unit: 'cucharadita' },
      { name: 'sal', quantity: 1, unit: 'cucharadita' },
      { name: 'agua', quantity: 1, unit: 'taza' },
      { name: 'tocino', quantity: 1, unit: 'taza' },
      { name: 'huevo', quantity: 2, unit: 'unidades' },
      { name: 'queso', quantity: 1, unit: 'taza' },
      { name: 'aceite de oliva', quantity: 1, unit: 'cucharada' },
      { name: 'sal', quantity: 1, unit: 'cucharadita' },
      { name: 'pimienta', quantity: 1, unit: 'cucharadita' },
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En un tazón grande, mezclar la harina, la levadura y la sal.',
      'Agregar el agua y mezclar hasta que se forme una masa.',
      'Agregar el aceite de oliva y mezclar hasta que se forme una masa.',
      'Dejar reposar la masa durante 10 minutos.',
      'Extender la masa en una bandeja para hornear y hornear durante 10 minutos.',
      'Retirar del horno y agregar el tocino, el huevo, el queso y la sal y la pimienta.',
      'Hornear durante 10 minutos o hasta que el queso esté derretido.',
      'Retirar del horno y servir.',
    ],
    saves: ['pinchechef', 'chefmaster'],
    likes: ['pinchechef', 'chefmaster', 'kitchenlover'],
    valoration: 4,
    valorations: [
      {
        username: 'kitchenmaster',
        comment: 'Soy un fanático de la pizza, me encanta.',
        rating: 4,
        date: new Date('2023-04-25T09:15:00.000Z'),
        comments: [
          {
            username: 'pinchechef',
            comment: 'Gracias por tu comentario.',
            date: new Date('2023-04-25T09:15:00.000Z'),
          },
        ],
      },
    ],
  },
  {
    name: 'Tacos de carne',
    username: 'masterchef',
    images: ['https://ik.imagekit.io/czvxqgafa/images/posts/tacos_carne.jpg'],
    description: 'Tacos de carne con una salsa picante.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['tacos', 'carne', 'salsa', 'picante'],
    difficulty: 'Inter',
    cookTime: 30,
    ingredients: [
      { name: 'carne molida', quantity: 1, unit: 'libra' },
      { name: 'cebolla', quantity: 1, unit: 'unidades' },
      { name: 'ajo', quantity: 2, unit: 'dientes' },
      { name: 'tomate', quantity: 1, unit: 'unidades' },
      { name: 'salsa picante', quantity: 1, unit: 'taza' },
      { name: 'sal', quantity: 1, unit: 'cucharadita' },
      { name: 'pimienta', quantity: 1, unit: 'cucharadita' },
    ],
    instructions: [
      'En una sartén grande, cocinar la carne molida hasta que esté cocida.',
      'Agregar la cebolla, el ajo y el tomate picado y cocinar durante 5 minutos.',
      'Agregar la salsa picante, la sal y la pimienta y cocinar durante 5 minutos.',
      'Retirar del fuego y servir.',
    ],
    saves: ['pinchechef', 'chefmaster', 'kitchenlover', 'masterchef'],
    likes: ['pinchechef', 'chefmaster', 'kitchenlover', 'masterchef'],
    valoration: 'NR',
    valorations: [],
  },
  {
    name: 'Coctel de camarones',
    username: 'pinchechef',
    images: [
      'https://ik.imagekit.io/czvxqgafa/images/posts/coctel_camarones.jpg',
    ],
    description: 'Un coctel de camarones perfecto para una cena especial.',
    date: new Date('2023-04-24T16:00:00.000Z'),
    tags: ['coctel', 'camarones', 'queso', 'tocino'],
    difficulty: 'Inter',
    cookTime: 30,
    ingredients: [
      { name: 'camarones', quantity: 1, unit: 'libra' },
      { name: 'tocino', quantity: 1, unit: 'taza' },
      { name: 'queso', quantity: 1, unit: 'taza' },
      { name: 'pimienta', quantity: 1, unit: 'cucharadita' },
      { name: 'sal', quantity: 1, unit: 'cucharadita' },
    ],
    instructions: [
      'Precalentar el horno a 180°C.',
      'En un tazón grande, mezclar los camarones, el tocino, el queso y la sal y la pimienta.',
      'Hornear durante 10 minutos o hasta que el queso esté derretido.',
      'Retirar del horno y servir.',
    ],
    saves: ['pinchechef', 'chefmaster', 'kitchenlover', 'masterchef'],
    likes: ['pinchechef', 'chefmaster', 'kitchenlover', 'masterchef'],
    valoration: 4,
    valorations: [
      {
        username: 'otrochef',
        comment: 'Me encantó, lo haré en casa.',
        rating: 4,
        date: new Date('2023-04-25T09:15:00.000Z'),
        comments: [
          {
            username: 'pinchechef',
            comment: 'Me alegra que te haya gustado.',
            date: new Date('2023-04-25T09:15:00.000Z'),
          },
        ],
      },
    ],
  },
];
