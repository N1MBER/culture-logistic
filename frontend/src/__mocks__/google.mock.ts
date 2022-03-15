import { Place, PlaceEvent } from '../types/place';

export const events: PlaceEvent[] = [
  {
    name: 'Example 1',
    startTime: new Date(),
    endTime: new Date(),
    galery: [
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    ],
    image:
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    description: 'Example description',
  },
  {
    name: 'Example 2',
    startTime: new Date(),
    endTime: new Date(),
    galery: [
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    ],
    image:
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    description: 'Example description',
  },
  {
    name: 'Example 3',
    startTime: new Date(),
    endTime: new Date(),
    galery: [
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    ],
    image:
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    description: 'Example description',
  },
  {
    name: 'Example 4',
    startTime: new Date(),
    endTime: new Date(),
    galery: [
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    ],
    image:
      'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
    description: 'Example description',
  },
];

export const pins: Place[] = [
  // {
  //   name: 'Exmaple',
  //   coordinate: {
  //     lat: 59.9638699,
  //     lng: 30.2873573,
  //   },
  //   workTime: {
  //     mon: [
  //       { hours: 9, minutes: 0 },
  //       { hours: 18, minutes: 0 },
  //     ],
  //     tue: [
  //       { hours: 9, minutes: 0 },
  //       { hours: 18, minutes: 0 },
  //     ],
  //     fri: [
  //       { hours: 9, minutes: 0 },
  //       { hours: 18, minutes: 0 },
  //     ],
  //     wed: [
  //       { hours: 9, minutes: 0 },
  //       { hours: 18, minutes: 0 },
  //     ],
  //     sat: [
  //       { hours: 9, minutes: 0 },
  //       { hours: 18, minutes: 0 },
  //     ],
  //     sun: [
  //       { hours: 9, minutes: 0 },
  //       { hours: 18, minutes: 0 },
  //     ],
  //     thu: [
  //       { hours: 9, minutes: 0 },
  //       { hours: 18, minutes: 0 },
  //     ],
  //   },
  //   address: 'Example address',
  //   description: 'Example description',
  //   image:
  //     'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
  //   galery: [
  //     'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
  //     'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
  //     'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
  //     'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
  //     'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg',
  //   ],
  //   events,
  // },
  {
    name: 'Государственный Эрмитаж',
    coordinate: {
      lat: 59.9398317,
      lng: 30.3145597,
    },
    workTime: {
      tue: [
        { hours: 10, minutes: 30 },
        { hours: 21, minutes: 0 },
      ],
      fri: [
        { hours: 10, minutes: 30 },
        { hours: 21, minutes: 0 },
      ],
      wed: [
        { hours: 10, minutes: 30 },
        { hours: 18, minutes: 0 },
      ],
      sat: [
        { hours: 10, minutes: 30 },
        { hours: 18, minutes: 0 },
      ],
      sun: [
        { hours: 10, minutes: 30 },
        { hours: 18, minutes: 0 },
      ],
      thu: [
        { hours: 10, minutes: 30 },
        { hours: 18, minutes: 0 },
      ],
    },
    address: 'Дворцовая пл., 2, Санкт-Петербург, 190000',
    description:
      'Музей, основанный Екатериной Великой, с богатой коллекцией произведений искусства и древностей.',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipPAeVlKXllx09TNj5ZuWKNL_dVT9_r6p_ZB7z0=w408-h271-k-no',
    galery: [
      'https://s0.rbk.ru/v6_top_pics/media/img/8/02/756178588156028.jpg',
      'https://cdnn21.img.ria.ru/images/103609/79/1036097900_0:158:3083:1892_600x0_80_0_0_30365e257ed6613f1974834fab5badfe.jpg',
      'https://filearchive.cnews.ru/img/news/2021/07/26/3f1f658dea50613c992c33874de871271199x555.9.jpg',
      'https://aif-s3.aif.ru/images/012/406/31384ffebcc890df1d351fcdc13a4251.jpg',
    ],
    events,
  },
  {
    name: 'Михайловский замок',
    coordinate: {
      lat: 59.9419748,
      lng: 30.332668,
    },
    workTime: {
      mon: [
        { hours: 10, minutes: 0 },
        { hours: 18, minutes: 0 },
      ],
      fri: [
        { hours: 10, minutes: 0 },
        { hours: 21, minutes: 0 },
      ],
      wed: [
        { hours: 10, minutes: 0 },
        { hours: 18, minutes: 0 },
      ],
      sat: [
        { hours: 10, minutes: 0 },
        { hours: 18, minutes: 0 },
      ],
      sun: [
        { hours: 10, minutes: 0 },
        { hours: 18, minutes: 0 },
      ],
      thu: [
        { hours: 13, minutes: 0 },
        { hours: 21, minutes: 0 },
      ],
    },
    address: 'Садовая ул., 2, Санкт-Петербург, 191023',
    description:
      'Замок XVIII века с роскошными залами, в которых сейчас выставлена часть коллекций из Русского музея.',
    image:
      'https://lh5.googleusercontent.com/p/AF1QipO1kBG1J0_AmdfFiR4HQ40rMU5yTmpu1g4HNWWC=w408-h300-k-no',
    galery: [
      'http://visit-petersburg.ru/media/uploads/audioguide/21/21_cover.jpg.1050x500_q95_crop_upscale.jpg',
      'https://fs.tonkosti.ru/03/2s/032s5j58k54cgcwcwsk8wswo0.jpg',
      'http://visit-petersburg.ru/media/uploads/tourobject/196691/196691_cover.jpg.1050x700_q95_crop_upscale.jpg',
      'https://s.inyourpocket.com/gallery/157150.jpg',
    ],
    events,
  },
];
