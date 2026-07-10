export type CatalogProduct = {
  code: string
  name: string
  description: string
  image: string
  imageAlt: string
  width: number
  height: number
  materials: string
  pressure: string
  temperature: string
  applications: string[]
  specifications: string[]
}

export type CatalogCategory = {
  id: string
  label: string
  summary: string
  image: string
  imageAlt: string
  width: number
  height: number
  products: CatalogProduct[]
}

export const CATALOG_CATEGORIES: CatalogCategory[] = [
  {
    "id": "adaptadores-laton",
    "label": "Adaptadores de latón",
    "summary": "Adaptadores de latón",
    "image": "/keaton/023-kl-41f.svg",
    "imageAlt": "KL-41F SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "KL-41F",
        "name": "KL-41F",
        "description": "Tuerca larga abocinado a 45°",
        "image": "/keaton-real/080-kl-41f.jpg",
        "imageAlt": "KL-41F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Tuerca larga abocinado a 45°",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-41F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Tuerca larga abocinado a 45°",
          "KL-41F",
          "Abocinado a 45",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AFA-602",
        "name": "KL-AFA-602",
        "description": "Adaptador hembra latón para frenos de aire",
        "image": "/keaton-real/134-kl-afa-602.jpg",
        "imageAlt": "KL-AFA-602 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador hembra latón para frenos de aire",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-AFA-602",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador hembra latón para frenos de aire",
          "KL-AFA-602",
          "ADAPTADORES",
          "De Latón",
          "Frenos de aire"
        ]
      },
      {
        "code": "KL-100B",
        "name": "KL-100B",
        "description": "Codo  a 90° Hembra-NP",
        "image": "/keaton-real/025-kl-100b.jpg",
        "imageAlt": "KL-100B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo  a 90° Hembra-NP",
        "applications": [
          "KL-100B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo  a 90° Hembra-NP",
          "KL-100B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-101B",
        "name": "KL-101B",
        "description": "Adaptador de latón",
        "image": "/keaton-real/026-kl-101b.jpg",
        "imageAlt": "KL-101B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-101B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "KL-101B",
          "ADAPTADORES",
          "De Latón",
          "Rosca tubería"
        ]
      },
      {
        "code": "KL-101B-EX",
        "name": "KL-101B-EX",
        "description": "Adaptador de latón",
        "image": "/keaton-real/027-kl-101b-ex.png",
        "imageAlt": "KL-101B-EX SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-101B-EX",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "KL-101B-EX",
          "ADAPTADORES",
          "De Latón",
          "Rosca tubería"
        ]
      },
      {
        "code": "KL-102B",
        "name": "KL-102B",
        "description": "Cruz NPT",
        "image": "/keaton-real/028-kl-102b.jpg",
        "imageAlt": "KL-102B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Cruz NPT",
        "applications": [
          "KL-102B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Cruz NPT",
          "KL-102B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-102BK",
        "name": "KL-102BK",
        "description": "Tuerca pasamuro bulkhead",
        "image": "/keaton-real/029-kl-102bk.jpg",
        "imageAlt": "KL-102BK SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-102BK",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca pasamuro bulkhead",
          "KL-102BK",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-103B",
        "name": "KL-103B",
        "description": "Cople NPT",
        "image": "/keaton-real/030-kl-103b.jpg",
        "imageAlt": "KL-103B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Cople NPT",
        "applications": [
          "KL-103B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Cople NPT",
          "KL-103B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-104B",
        "name": "KL-104B",
        "description": "Tuerca unión",
        "image": "/keaton-real/031-kl-104b.jpg",
        "imageAlt": "KL-104B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-104B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca unión",
          "KL-104B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-108B",
        "name": "KL-108B",
        "description": "Tapón hembra",
        "image": "/keaton-real/032-kl-108b.jpg",
        "imageAlt": "KL-108B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-108B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tapón hembra",
          "KL-108B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-109B",
        "name": "KL-109B",
        "description": "Tapón macho cabeza cuadrada",
        "image": "/keaton-real/033-kl-109b.jpg",
        "imageAlt": "KL-109B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-109B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tapón macho cabeza cuadrada",
          "KL-109B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-110B",
        "name": "KL-110B",
        "description": "Reducción bushing",
        "image": "/keaton-real/034-kl-110b.jpg",
        "imageAlt": "KL-110B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-110B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Reducción bushing",
          "KL-110B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-111B",
        "name": "KL-111B",
        "description": "Contra tuerca",
        "image": "/keaton-real/035-kl-111b.jpg",
        "imageAlt": "KL-111B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Contra tuerca",
        "applications": [
          "KL-111B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Contra tuerca",
          "KL-111B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-112B",
        "name": "KL-112B",
        "description": "Niple corto NPT",
        "image": "/keaton-real/036-kl-112b.jpg",
        "imageAlt": "KL-112B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-112B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Niple corto NPT",
          "KL-112B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-113B",
        "name": "KL-113B",
        "description": "Niple largo",
        "image": "/keaton-real/037-kl-113b.jpg",
        "imageAlt": "KL-113B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-113B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Niple largo",
          "KL-113B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-116B",
        "name": "KL-116B",
        "description": "Codo a 90° Hembra – Terminal Macho",
        "image": "/keaton-real/038-kl-116b.jpg",
        "imageAlt": "KL-116B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° Hembra – Terminal Macho",
        "applications": [
          "KL-116B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° Hembra – Terminal Macho",
          "KL-116B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-117B",
        "name": "KL-117B",
        "description": "Tapón macho cabeza ranurada",
        "image": "/keaton-real/040-kl-117b.jpg",
        "imageAlt": "KL-117B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-117B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tapón macho cabeza ranurada",
          "KL-117B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-119B",
        "name": "KL-119B",
        "description": "Reducción hembra NPT",
        "image": "/keaton-real/041-kl-119b.jpg",
        "imageAlt": "KL-119B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-119B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Reducción hembra NPT",
          "KL-119B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-120B",
        "name": "KL-120B",
        "description": "Adaptador Macho – Hembra",
        "image": "/keaton-real/042-kl-120b.jpg",
        "imageAlt": "KL-120B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-120B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Adaptador Macho – Hembra",
          "KL-120B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-121B",
        "name": "KL-121B",
        "description": "Tapón cabeza hexagonal",
        "image": "/keaton-real/043-kl-121b.jpg",
        "imageAlt": "KL-121B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-121B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tapón cabeza hexagonal",
          "KL-121B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-122B",
        "name": "KL-122B",
        "description": "Niple hexagonal NPT",
        "image": "/keaton-real/044-kl-122b.jpg",
        "imageAlt": "KL-122B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-122B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Niple hexagonal NPT",
          "KL-122B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-123B",
        "name": "KL-123B",
        "description": "Niple hexagonal reductor",
        "image": "/keaton-real/045-kl-123b.jpg",
        "imageAlt": "KL-123B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-123B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Niple hexagonal reductor",
          "KL-123B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-124B",
        "name": "KL-124B",
        "description": "Codo a 45° hembra macho",
        "image": "/keaton-real/046-kl-124b.jpg",
        "imageAlt": "KL-124B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 45° hembra macho",
        "applications": [
          "KL-124B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 45° hembra macho",
          "KL-124B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-127B",
        "name": "KL-127B",
        "description": "Tee con macho lateral",
        "image": "/keaton-real/047-kl-127b.jpg",
        "imageAlt": "KL-127B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-127B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho lateral",
          "KL-127B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-129B",
        "name": "KL-129B",
        "description": "Cople mampara",
        "image": "/keaton-real/048-kl-129b.jpg",
        "imageAlt": "KL-129B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Cople mampara",
        "applications": [
          "KL-129B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Cople mampara",
          "KL-129B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-136B",
        "name": "KL-136B",
        "description": "Tee con macho NPT al centro",
        "image": "/keaton-real/049-kl-136b.jpg",
        "imageAlt": "KL-136B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-136B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho NPT al centro",
          "KL-136B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-201E",
        "name": "KL-201E",
        "description": "Grifo de drenado",
        "image": "/keaton-real/050-kl-201e.jpg",
        "imageAlt": "KL-201E SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-201E",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Grifo de drenado",
          "KL-201E",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-219B",
        "name": "KL-219B",
        "description": "Tapón allen",
        "image": "/keaton-real/051-kl-219b.jpg",
        "imageAlt": "KL-219B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-219B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tapón allen",
          "KL-219B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-2404",
        "name": "KL-2404",
        "description": "MJ x MP",
        "image": "/keaton-real/052-kl-2404.jpg",
        "imageAlt": "KL-2404 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-2404",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "MJ x MP",
          "KL-2404",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-2501",
        "name": "KL-2501",
        "description": "Codo 90° latón macho JIC 37° x Macho NPT",
        "image": "/keaton-real/053-kl-2501.jpg",
        "imageAlt": "KL-2501 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo 90° latón macho JIC 37° x Macho NPT",
        "applications": [
          "KL-2501",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo 90° latón macho JIC 37° x Macho NPT",
          "KL-2501",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-262P",
        "name": "KL-262P",
        "description": "Unión compresión polyflo",
        "image": "/keaton-real/054-kl-262p.jpg",
        "imageAlt": "KL-262P SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-262P",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión compresión polyflo",
          "KL-262P",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-269P",
        "name": "KL-269P",
        "description": "Codo a 90° polyflo Macho NPT",
        "image": "/keaton-real/057-kl-269p.jpg",
        "imageAlt": "KL-269P SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° polyflo Macho NPT",
        "applications": [
          "KL-269P",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° polyflo Macho NPT",
          "KL-269P",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-322E",
        "name": "KL-322E",
        "description": "Grifo de drenado con asiento externo",
        "image": "/keaton-real/061-kl-322e.jpg",
        "imageAlt": "KL-322E SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-322E",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Grifo de drenado con asiento externo",
          "KL-322E",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-3456B",
        "name": "KL-3456B",
        "description": "Tee macho NPTxNPTxNPT",
        "image": "/keaton-real/063-kl-3456b.jpg",
        "imageAlt": "KL-3456B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-3456B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee macho NPTxNPTxNPT",
          "KL-3456B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-40F",
        "name": "KL-40F",
        "description": "Tapón Hembra Abocinado",
        "image": "/keaton-real/079-kl-40f.jpg",
        "imageAlt": "KL-40F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-40F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tapón Hembra Abocinado",
          "KL-40F",
          "ADAPTADORES",
          "De Acero"
        ]
      },
      {
        "code": "KL-41FM",
        "name": "KL-41FM",
        "description": "Tuerca mediana",
        "image": "/keaton-real/081-kl-41fm.jpg",
        "imageAlt": "KL-41FM SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-41FM",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca mediana",
          "KL-41FM",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-42F",
        "name": "KL-42F",
        "description": "Unión",
        "image": "/keaton-real/087-kl-42f.jpg",
        "imageAlt": "KL-42F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-42F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión",
          "KL-42F",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-41FS",
        "name": "KL-41FS",
        "description": "Tuerca corta",
        "image": "/keaton-real/082-kl-41fs.jpg",
        "imageAlt": "KL-41FS SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-41FS",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca corta",
          "KL-41FS",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-4-459F",
        "name": "KL-4-459F",
        "description": "Inserto de latón para frenos de aire",
        "image": "/keaton-real/065-kl-4-459f.jpg",
        "imageAlt": "KL-4-459F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-459F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Inserto de latón para frenos de aire",
          "KL-4-459F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-460F",
        "name": "KL-4-460F",
        "description": "Barril para frenos de aire",
        "image": "/keaton-real/066-kl-4-460f.jpg",
        "imageAlt": "KL-4-460F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-460F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Barril para frenos de aire",
          "KL-4-460F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-461F",
        "name": "KL-4-461F",
        "description": "Tuerca para frenos de aire",
        "image": "/keaton-real/067-kl-4-461f.jpg",
        "imageAlt": "KL-4-461F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-461F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca para frenos de aire",
          "KL-4-461F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-462F",
        "name": "KL-4-462F",
        "description": "Union para Frenos de Aire",
        "image": "/keaton-real/068-kl-4-462f.jpg",
        "imageAlt": "KL-4-462F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-462F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Union para Frenos de Aire",
          "KL-4-462F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-464F",
        "name": "KL-4-464F",
        "description": "Tee unión para frenos de aire CA360",
        "image": "/keaton-real/069-kl-4-464f.jpg",
        "imageAlt": "KL-4-464F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Tee unión para frenos de aire CA360",
        "applications": [
          "KL-4-464F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee unión para frenos de aire CA360",
          "KL-4-464F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-465F",
        "name": "KL-4-465F",
        "description": "Codo unión para frenos de airea 90°",
        "image": "/keaton-real/070-kl-4-465f.jpg",
        "imageAlt": "KL-4-465F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo unión para frenos de airea 90°",
        "applications": [
          "KL-4-465F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo unión para frenos de airea 90°",
          "KL-4-465F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-466F",
        "name": "KL-4-466F",
        "description": "Conector hembra para frenos de aire",
        "image": "/keaton-real/071-kl-4-466f.jpg",
        "imageAlt": "KL-4-466F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector hembra para frenos de aire",
        "applications": [
          "KL-4-466F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector hembra para frenos de aire",
          "KL-4-466F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-468F",
        "name": "KL-4-468F",
        "description": "Conector macho para frenos de aire",
        "image": "/keaton-real/072-kl-4-468f.jpg",
        "imageAlt": "KL-4-468F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho para frenos de aire",
        "applications": [
          "KL-4-468F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho para frenos de aire",
          "KL-4-468F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-469F",
        "name": "KL-4-469F",
        "description": "Macho codo a 90°",
        "image": "/keaton-real/073-kl-4-469f.jpg",
        "imageAlt": "KL-4-469F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-469F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Macho codo a 90°",
          "KL-4-469F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-470F",
        "name": "KL-4-470F",
        "description": "Hembra codo a 90°",
        "image": "/keaton-real/074-kl-4-470f.jpg",
        "imageAlt": "KL-4-470F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-470F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Hembra codo a 90°",
          "KL-4-470F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-471F",
        "name": "KL-4-471F",
        "description": "Tee tubería con Macho lateral",
        "image": "/keaton-real/075-kl-4-471f.jpg",
        "imageAlt": "KL-4-471F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-471F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee tubería con Macho lateral",
          "KL-4-471F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-472F",
        "name": "KL-4-472F",
        "description": "Tee con macho al centro",
        "image": "/keaton-real/076-kl-4-472f.jpg",
        "imageAlt": "KL-4-472F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-472F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho al centro",
          "KL-4-472F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-474F",
        "name": "KL-4-474F",
        "description": "Macho codo a 45°",
        "image": "/keaton-real/077-kl-4-474f.jpg",
        "imageAlt": "KL-4-474F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-474F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Macho codo a 45°",
          "KL-4-474F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-4-474FBK",
        "name": "KL-4-474FBK",
        "description": "Unión pasamuro (Bulkhead)",
        "image": "/keaton-real/078-kl-4-474fbk.jpg",
        "imageAlt": "KL-4-474FBK SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-4-474FBK",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión pasamuro (Bulkhead)",
          "KL-4-474FBK",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-44F",
        "name": "KL-44F",
        "description": "Tee unión macho",
        "image": "/keaton-real/089-kl-44f.jpg",
        "imageAlt": "KL-44F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-44F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee unión macho",
          "KL-44F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-45F",
        "name": "KL-45F",
        "description": "Tee con macho al centro",
        "image": "/keaton-real/091-kl-45f.jpg",
        "imageAlt": "KL-45F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-45F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho al centro",
          "KL-45F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-460F",
        "name": "KL-460F",
        "description": "Barril para tubo de cobre",
        "image": "/keaton-real/092-kl-460f.jpg",
        "imageAlt": "KL-460F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-460F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Barril para tubo de cobre",
          "KL-460F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-461F",
        "name": "KL-461F",
        "description": "Tuerca para tubo de cobre",
        "image": "/keaton-real/093-kl-461f.jpg",
        "imageAlt": "KL-461F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-461F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca para tubo de cobre",
          "KL-461F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-466F",
        "name": "KL-466F",
        "description": "Conector hembra NPT",
        "image": "/keaton-real/097-kl-466f.jpg",
        "imageAlt": "KL-466F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector hembra NPT",
        "applications": [
          "KL-466F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector hembra NPT",
          "KL-466F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-468F",
        "name": "KL-468F",
        "description": "Conector Macho NPT",
        "image": "/keaton-real/098-kl-468f.jpg",
        "imageAlt": "KL-468F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador latón",
        "temperature": "Conector Macho NPT",
        "applications": [
          "KL-468F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador latón",
          "Conector Macho NPT",
          "KL-468F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-469F",
        "name": "KL-469F",
        "description": "Codo a 90° Macho NPT",
        "image": "/keaton-real/099-kl-469f.jpg",
        "imageAlt": "KL-469F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° Macho NPT",
        "applications": [
          "KL-469F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° Macho NPT",
          "KL-469F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-46F",
        "name": "KL-46F",
        "description": "Conector hembra NPT",
        "image": "/keaton-real/100-kl-46f.jpg",
        "imageAlt": "KL-46F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de acero standard",
        "temperature": "Conector hembra NPT",
        "applications": [
          "KL-46F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de acero standard",
          "Conector hembra NPT",
          "KL-46F",
          "ADAPTADORES",
          "De Acero"
        ]
      },
      {
        "code": "KL-471F",
        "name": "KL-471F",
        "description": "Tee con macho lateral NPT",
        "image": "/keaton-real/102-kl-471f.png",
        "imageAlt": "KL-471F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-471F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho lateral NPT",
          "KL-471F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-472F",
        "name": "KL-472F",
        "description": "Tee con macho al centro NPT",
        "image": "/keaton-real/103-kl-472f.png",
        "imageAlt": "KL-472F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-472F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho al centro NPT",
          "KL-472F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-474F",
        "name": "KL-474F",
        "description": "Frenos de aire tubería de cobre",
        "image": "/keaton-real/104-kl-474f.png",
        "imageAlt": "KL-474F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-474F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Frenos de aire tubería de cobre",
          "KL-474F",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-48F",
        "name": "KL-48F",
        "description": "Conector macho NPT",
        "image": "/keaton-real/105-kl-48f.jpg",
        "imageAlt": "KL-48F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho NPT",
        "applications": [
          "KL-48F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho NPT",
          "KL-48F",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-70F",
        "name": "KL-70F",
        "description": "Codo a 90° Hembra NPT",
        "image": "/keaton-real/121-kl-70f.jpg",
        "imageAlt": "KL-70F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° Hembra NPT",
        "applications": [
          "KL-70F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° Hembra NPT",
          "KL-70F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-49F",
        "name": "KL-49F",
        "description": "Macho NPT codo a 90°",
        "image": "/keaton-real/107-kl-49f.jpg",
        "imageAlt": "KL-49F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptadores de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-49F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptadores de latón",
          "Macho NPT codo a 90°",
          "KL-49F",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-50F",
        "name": "KL-50F",
        "description": "Hembra codo a 90° (Forjado)",
        "image": "/keaton-real/109-kl-50f.png",
        "imageAlt": "KL-50F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-50F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Hembra codo a 90° (Forjado)",
          "KL-50F",
          "ADAPTADORES",
          "De Acero"
        ]
      },
      {
        "code": "KL-51F",
        "name": "KL-51F",
        "description": "Tee  con macho lateral",
        "image": "/keaton-real/110-kl-51f.jpg",
        "imageAlt": "KL-51F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón abocinado a 45°",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-51F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón abocinado a 45°",
          "Tee  con macho lateral",
          "KL-51F",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-54F",
        "name": "KL-54F",
        "description": "Macho NPT codo a 90°",
        "image": "/keaton-real/111-kl-54f.jpg",
        "imageAlt": "KL-54F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-54F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Macho NPT codo a 90°",
          "KL-54F",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-55F",
        "name": "KL-55F",
        "description": "Unión codo a 90°",
        "image": "/keaton-real/112-kl-55f.jpg",
        "imageAlt": "KL-55F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-55F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión codo a 90°",
          "KL-55F",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-60F",
        "name": "KL-60F",
        "description": "Barril",
        "image": "/keaton-real/113-kl-60f.jpg",
        "imageAlt": "KL-60F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compresión",
        "applications": [
          "KL-60F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Barril",
          "KL-60F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-61F",
        "name": "KL-61F",
        "description": "Tuerca para compresión",
        "image": "/keaton-real/114-kl-61f.jpg",
        "imageAlt": "KL-61F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compresión",
        "applications": [
          "KL-61F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca para compresión",
          "KL-61F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-62F",
        "name": "KL-62F",
        "description": "Unión para compresión",
        "image": "/keaton-real/115-kl-62f.jpg",
        "imageAlt": "KL-62F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compresión",
        "applications": [
          "KL-62F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión para compresión",
          "KL-62F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-64F",
        "name": "KL-64F",
        "description": "Tee unión para compresión",
        "image": "/keaton-real/116-kl-64f.jpg",
        "imageAlt": "KL-64F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compresión",
        "applications": [
          "KL-64F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee unión para compresión",
          "KL-64F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-65F",
        "name": "KL-65F",
        "description": "Unión codo para compresión a 90°",
        "image": "/keaton-real/117-kl-65f.jpg",
        "imageAlt": "KL-65F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compresión",
        "applications": [
          "KL-65F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión codo para compresión a 90°",
          "KL-65F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-66F",
        "name": "KL-66F",
        "description": "Conector hembra para compresión",
        "image": "/keaton-real/118-kl-66f.jpg",
        "imageAlt": "KL-66F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector hembra para compresión",
        "applications": [
          "KL-66F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector hembra para compresión",
          "KL-66F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-68F",
        "name": "KL-68F",
        "description": "Conector macho",
        "image": "/keaton-real/119-kl-68f.jpg",
        "imageAlt": "KL-68F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho",
        "applications": [
          "KL-68F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho",
          "KL-68F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-69F",
        "name": "KL-69F",
        "description": "Codo a 90° Macho NPT",
        "image": "/keaton-real/120-kl-69f.jpg",
        "imageAlt": "KL-69F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° Macho NPT",
        "applications": [
          "KL-69F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° Macho NPT",
          "KL-69F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-71F",
        "name": "KL-71F",
        "description": "Tee con macho lateral",
        "image": "/keaton-real/122-kl-71f.jpg",
        "imageAlt": "KL-71F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compresión",
        "applications": [
          "KL-71F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho lateral",
          "KL-71F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-72F",
        "name": "KL-72F",
        "description": "Tee con Macho al centro",
        "image": "/keaton-real/123-kl-72f.jpg",
        "imageAlt": "KL-72F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compresión",
        "applications": [
          "KL-72F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con Macho al centro",
          "KL-72F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-74F",
        "name": "KL-74F",
        "description": "Codo a 45° macho",
        "image": "/keaton-real/124-kl-74f.jpg",
        "imageAlt": "KL-74F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 45° macho",
        "applications": [
          "KL-74F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 45° macho",
          "KL-74F",
          "ADAPTADORES",
          "Compresión"
        ]
      },
      {
        "code": "KL-AB-62",
        "name": "KL-AB-62",
        "description": "Unión",
        "image": "/keaton-real/125-kl-ab-62.jpg",
        "imageAlt": "KL-AB-62 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-AB-62",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión",
          "KL-AB-62",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-67",
        "name": "KL-AB-67",
        "description": "Tuerca con resorte",
        "image": "/keaton-real/126-kl-ab-67.jpg",
        "imageAlt": "KL-AB-67 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-AB-67",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca con resorte",
          "KL-AB-67",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-73",
        "name": "KL-AB-73",
        "description": "Barril",
        "image": "/keaton-real/127-kl-ab-73.jpg",
        "imageAlt": "KL-AB-73 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-AB-73",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Barril",
          "KL-AB-73",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-81",
        "name": "KL-AB-81",
        "description": "Tuerca",
        "image": "/keaton-real/128-kl-ab-81.jpg",
        "imageAlt": "KL-AB-81 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-AB-81",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca",
          "KL-AB-81",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-82",
        "name": "KL-AB-82",
        "description": "Tuerca con resorte",
        "image": "/keaton-real/129-kl-ab-82.jpg",
        "imageAlt": "KL-AB-82 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-AB-82",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca con resorte",
          "KL-AB-82",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-MP",
        "name": "KL-AB-MP",
        "description": "Cople macho NPT",
        "image": "/keaton-real/130-kl-ab-mp.png",
        "imageAlt": "KL-AB-MP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Cople macho NPT",
        "applications": [
          "KL-AB-MP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Cople macho NPT",
          "KL-AB-MP",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-PR",
        "name": "KL-AB-PR",
        "description": "Cople macho sin resorte",
        "image": "/keaton-real/131-kl-ab-pr.jpg",
        "imageAlt": "KL-AB-PR SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Cople macho sin resorte",
        "applications": [
          "KL-AB-PR",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Cople macho sin resorte",
          "KL-AB-PR",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-PR85",
        "name": "KL-AB-PR85",
        "description": "Conector macho (sin tuerca)",
        "image": "/keaton-real/132-kl-ab-pr85.jpg",
        "imageAlt": "KL-AB-PR85 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho (sin tuerca)",
        "applications": [
          "KL-AB-PR85",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho (sin tuerca)",
          "KL-AB-PR85",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-AB-PR94",
        "name": "KL-AB-PR94",
        "description": "Conector macho con resorte.",
        "image": "/keaton-real/133-kl-ab-pr94.jpg",
        "imageAlt": "KL-AB-PR94 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho con resorte.",
        "applications": [
          "KL-AB-PR94",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho con resorte.",
          "KL-AB-PR94",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-N69",
        "name": "KL-N69",
        "description": "Codo a 90° Macho NPT",
        "image": "/keaton-real/146-kl-n69.jpg",
        "imageAlt": "KL-N69 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° Macho NPT",
        "applications": [
          "KL-N69",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° Macho NPT",
          "KL-N69",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-L04",
        "name": "KL-L04",
        "description": "Conector LOC a hembra JIC",
        "image": "/keaton-real/138-kl-l04.jpg",
        "imageAlt": "KL-L04 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector LOC a hembra JIC",
        "applications": [
          "KL-L04",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector LOC a hembra JIC",
          "KL-L04",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "KL-L09",
        "name": "KL-L09",
        "description": "Conector LOC a macho NPT",
        "image": "/keaton-real/139-kl-l09.jpg",
        "imageAlt": "KL-L09 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector LOC a macho NPT",
        "applications": [
          "KL-L09",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector LOC a macho NPT",
          "KL-L09",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "KL-2710-M8",
        "name": "KL-2710-M8",
        "description": "Pivote",
        "image": "/keaton-real/058-kl-2710-m8.png",
        "imageAlt": "KL-2710-M8 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-2710-M8",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Pivote",
          "KL-2710-M8",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-272P",
        "name": "KL-272P",
        "description": "Tee macho al centro",
        "image": "/keaton-real/059-kl-272p.jpg",
        "imageAlt": "KL-272P SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Compartir en Facebook",
        "applications": [
          "KL-272P",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee macho al centro",
          "KL-272P",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-330E",
        "name": "KL-330E",
        "description": "Grifo de latón",
        "image": "/keaton-real/062-kl-330e.jpg",
        "imageAlt": "KL-330E SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-330E",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Grifo de latón",
          "KL-330E",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-41W",
        "name": "KL-41W",
        "description": "Tuerca para abocinado invertido",
        "image": "/keaton-real/083-kl-41w.png",
        "imageAlt": "KL-41W SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-41W",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca para abocinado invertido",
          "KL-41W",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-41WB",
        "name": "KL-41WB",
        "description": "Tuerca abocinado 45° invertido",
        "image": "/keaton-real/084-kl-41wb.jpg",
        "imageAlt": "KL-41WB SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-41WB",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca abocinado 45° invertido",
          "KL-41WB",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-42E",
        "name": "KL-42E",
        "description": "Grifo de drenado",
        "image": "/keaton-real/086-kl-42e.jpg",
        "imageAlt": "KL-42E SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-42E",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Grifo de drenado",
          "KL-42E",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-41WL",
        "name": "KL-41WL",
        "description": "Tuerca larga para abocinado invertido",
        "image": "/keaton-real/085-kl-41wl.png",
        "imageAlt": "KL-41WL SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-41WL",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tuerca larga para abocinado invertido",
          "KL-41WL",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-42W",
        "name": "KL-42W",
        "description": "Unión abocinado 45° invertido",
        "image": "/keaton-real/088-kl-42w.png",
        "imageAlt": "KL-42W SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-42W",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Unión abocinado 45° invertido",
          "KL-42W",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-44W",
        "name": "KL-44W",
        "description": "Tee unión abocinado 45° invertido",
        "image": "/keaton-real/090-kl-44w.jpg",
        "imageAlt": "KL-44W SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-44W",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee unión abocinado 45° invertido",
          "KL-44W",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-46W",
        "name": "KL-46W",
        "description": "Conector hembra abocinado 45° invertido",
        "image": "/keaton-real/101-kl-46w.jpg",
        "imageAlt": "KL-46W SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector hembra abocinado 45° invertido",
        "applications": [
          "KL-46W",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector hembra abocinado 45° invertido",
          "KL-46W",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-48W",
        "name": "KL-48W",
        "description": "Conector macho abocinado 45° invertido",
        "image": "/keaton-real/106-kl-48w.png",
        "imageAlt": "KL-48W SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho abocinado 45° invertido",
        "applications": [
          "KL-48W",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho abocinado 45° invertido",
          "KL-48W",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-49W",
        "name": "KL-49W",
        "description": "Conector macho 90° abocinado 45° invertido",
        "image": "/keaton-real/108-kl-49w.png",
        "imageAlt": "KL-49W SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho 90° abocinado 45° invertido",
        "applications": [
          "KL-49W",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho 90° abocinado 45° invertido",
          "KL-49W",
          "Abocinado a 45",
          "ADAPTADORES"
        ]
      },
      {
        "code": "KL-FA-P02",
        "name": "KL-FA-P02",
        "description": "Hembra giratoria para manguera frenos de aire",
        "image": "/keaton-real/135-kl-fa-p02.jpg",
        "imageAlt": "KL-FA-P02 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-FA-P02",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Hembra giratoria para manguera frenos de aire",
          "KL-FA-P02",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-SHORT-129B",
        "name": "KL-SHORT-129B",
        "description": "Cople mampara corto",
        "image": "/keaton-real/149-kl-short-129b.jpg",
        "imageAlt": "KL-SHORT-129B SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Cople mampara corto",
        "applications": [
          "KL-SHORT-129B",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Cople mampara corto",
          "KL-SHORT-129B",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-116B-EX",
        "name": "KL-116B-EX",
        "description": "Codo a 90° Extruido Hembra- Terminal Macho",
        "image": "/keaton-real/039-kl-116b-ex.png",
        "imageAlt": "KL-116B-EX SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° Extruido Hembra- Terminal Macho",
        "applications": [
          "KL-116B-EX",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° Extruido Hembra- Terminal Macho",
          "KL-116B-EX",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-264P",
        "name": "KL-264P",
        "description": "Polyfit Unión Tee 1/2″",
        "image": "/keaton-real/055-kl-264p.jpg",
        "imageAlt": "KL-264P SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-264P",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Polyfit Unión Tee 1/2″",
          "KL-264P",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-266P",
        "name": "KL-266P",
        "description": "Conector hembra",
        "image": "/keaton-real/056-kl-266p.jpg",
        "imageAlt": "KL-266P SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector hembra",
        "applications": [
          "KL-266P",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector hembra",
          "KL-266P",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-320E",
        "name": "KL-320E",
        "description": "Grifo de Drenado Asiento externo",
        "image": "/keaton-real/060-kl-320e.png",
        "imageAlt": "KL-320E SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-320E",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Grifo de Drenado Asiento externo",
          "KL-320E",
          "ADAPTADORES",
          "De Latón"
        ]
      }
    ]
  },
  {
    "id": "conexiones-hidraulicas",
    "label": "Conexiones hidráulicas",
    "summary": "Conexiones hidráulicas",
    "image": "/keaton/006-qm2030.svg",
    "imageAlt": "QM2030 SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "QM2030",
        "name": "QM2030",
        "description": "Conexión de acero, macho JIC para mangueras de 2 mallas.",
        "image": "/keaton-real/188-qm2030.jpg",
        "imageAlt": "QM2030 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión de acero, macho JIC para mangueras de 2 mallas.",
        "temperature": "Conexión de acero, macho JIC para mangueras de 2 mallas.",
        "applications": [
          "QM2030",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión de acero, macho JIC para mangueras de 2 mallas.",
          "QM2030",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2040",
        "name": "QM2040",
        "description": "Conexión hembra JIC para mangueras de 2 trenzas",
        "image": "/keaton-real/189-qm2040.jpg",
        "imageAlt": "QM2040 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra JIC para mangueras de 2 trenzas",
        "temperature": "Conexión hembra JIC para mangueras de 2 trenzas",
        "applications": [
          "QM2040",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra JIC para mangueras de 2 trenzas",
          "QM2040",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2090",
        "name": "QM2090",
        "description": "Conexión macho NPT para mangueras de 2 trenzas",
        "image": "/keaton-real/190-qm2090.jpg",
        "imageAlt": "QM2090 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión macho NPT para mangueras de 2 trenzas",
        "temperature": "Conexión macho NPT para mangueras de 2 trenzas",
        "applications": [
          "QM2090",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión macho NPT para mangueras de 2 trenzas",
          "QM2090",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2120",
        "name": "QM2120",
        "description": "Conexión hembra BSPP con asiento a 60° JIS para 2 mallas.",
        "image": "/keaton-real/191-qm2120.jpg",
        "imageAlt": "QM2120 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra BSPP con asiento a 60° JIS para 2 mallas.",
        "temperature": "Conexión hembra BSPP con asiento a 60° JIS para 2 mallas.",
        "applications": [
          "QM2120",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra BSPP con asiento a 60° JIS para 2 mallas.",
          "QM2120",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2240",
        "name": "QM2240",
        "description": "Conexión hembra JIC a 90° para mangueras de 2 trenzas.",
        "image": "/keaton-real/197-qm2240.jpg",
        "imageAlt": "QM2240 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra JIC a 90° para mangueras de 2 trenzas.",
        "temperature": "Conexión hembra JIC a 90° para mangueras de 2 trenzas.",
        "applications": [
          "QM2240",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra JIC a 90° para mangueras de 2 trenzas.",
          "QM2240",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2250",
        "name": "QM2250",
        "description": "Conexión hembra JIC a 45° para mangueras de 2 trenzas.",
        "image": "/keaton-real/198-qm2250.jpg",
        "imageAlt": "QM2250 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra JIC a 45° para mangueras de 2 trenzas.",
        "temperature": "Conexión hembra JIC a 45° para mangueras de 2 trenzas.",
        "applications": [
          "QM2250",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra JIC a 45° para mangueras de 2 trenzas.",
          "QM2250",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM7800",
        "name": "QM7800",
        "description": "Conexión hembra Cara Plana para 4 mallas.",
        "image": "/keaton-real/231-qm7800.jpg",
        "imageAlt": "QM7800 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra Cara Plana para 4 mallas.",
        "temperature": "Conexión hembra Cara Plana para 4 mallas.",
        "applications": [
          "QM7800",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra Cara Plana para 4 mallas.",
          "QM7800",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2810",
        "name": "QM2810",
        "description": "Conexión hembra cara plana a 45° para 2 trenzas.",
        "image": "/keaton-real/212-qm2810.jpg",
        "imageAlt": "QM2810 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra cara plana a 45° para 2 trenzas.",
        "temperature": "Conexión hembra cara plana a 45° para 2 trenzas.",
        "applications": [
          "QM2810",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra cara plana a 45° para 2 trenzas.",
          "QM2810",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2820",
        "name": "QM2820",
        "description": "Conexión hembra cara plana a 90° para 2 mallas.",
        "image": "/keaton-real/213-qm2820.jpg",
        "imageAlt": "QM2820 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra cara plana a 90° para 2 mallas.",
        "temperature": "Conexión hembra cara plana a 90° para 2 mallas.",
        "applications": [
          "QM2820",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra cara plana a 90° para 2 mallas.",
          "QM2820",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2840",
        "name": "QM2840",
        "description": "Conexión macho cara plana para 2 mallas",
        "image": "/keaton-real/214-qm2840.jpg",
        "imageAlt": "QM2840 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión macho cara plana para 2 mallas",
        "temperature": "Conexión macho cara plana para 2 mallas",
        "applications": [
          "QM2840",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión macho cara plana para 2 mallas",
          "QM2840",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2800",
        "name": "QM2800",
        "description": "Conexión Hembra Cara Plana para 2 mallas.",
        "image": "/keaton-real/209-qm2800.jpg",
        "imageAlt": "QM2800 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión Hembra Cara Plana para 2 mallas.",
        "temperature": "Conexión Hembra Cara Plana para 2 mallas.",
        "applications": [
          "QM2800",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión Hembra Cara Plana para 2 mallas.",
          "QM2800",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM7030",
        "name": "QM7030",
        "description": "Conexión macho  JIC para 4 mallas.",
        "image": "/keaton-real/218-qm7030.jpg",
        "imageAlt": "QM7030 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión macho  JIC para 4 mallas.",
        "temperature": "Conexión macho  JIC para 4 mallas.",
        "applications": [
          "QM7030",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión macho  JIC para 4 mallas.",
          "QM7030",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM7040",
        "name": "QM7040",
        "description": "Conexión hembra  JIC para 4 mallas.",
        "image": "/keaton-real/219-qm7040.jpg",
        "imageAlt": "QM7040 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hembra  JIC para 4 mallas.",
        "temperature": "Conexión hembra  JIC para 4 mallas.",
        "applications": [
          "QM7040",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hembra  JIC para 4 mallas.",
          "QM7040",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM2200",
        "name": "QM2200",
        "description": "Conexión hidráulica Macho O’Ring Boss para 2 trenzas.",
        "image": "/keaton-real/196-qm2200.jpg",
        "imageAlt": "QM2200 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica Macho O’Ring Boss para 2 trenzas.",
        "temperature": "Conexión hidráulica Macho O’Ring Boss para 2 trenzas.",
        "applications": [
          "QM2200",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica Macho O’Ring Boss para 2 trenzas.",
          "QM2200",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "KL-L124",
        "name": "KL-L124",
        "description": "Espiga hembra nariz de bola.",
        "image": "/keaton-real/140-kl-l124.jpg",
        "imageAlt": "KL-L124 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión lock",
        "temperature": "Conexión lock",
        "applications": [
          "KL-L124",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión lock",
          "Espiga hembra nariz de bola.",
          "KL-L124",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "KL-L218",
        "name": "KL-L218",
        "description": "Conector LOC push on para tubo",
        "image": "/keaton-real/141-kl-l218.jpg",
        "imageAlt": "KL-L218 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión Lock",
        "temperature": "Conexión Lock",
        "applications": [
          "KL-L218",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión Lock",
          "Conector LOC push on para tubo",
          "KL-L218",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "KL-L274",
        "name": "KL-L274",
        "description": "Conector macho SAE invertido",
        "image": "/keaton-real/142-kl-l274.jpg",
        "imageAlt": "KL-L274 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión Lock",
        "temperature": "Conexión Lock",
        "applications": [
          "KL-L274",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión Lock",
          "Conector macho SAE invertido",
          "KL-L274",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "KL-L53",
        "name": "KL-L53",
        "description": "Conector macho SAE",
        "image": "/keaton-real/143-kl-l53.jpg",
        "imageAlt": "KL-L53 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión Lock",
        "temperature": "Conexión Lock",
        "applications": [
          "KL-L53",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión Lock",
          "Conector macho SAE",
          "KL-L53",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "QM2020",
        "name": "QM2020",
        "description": "Hembra británica, nariz de bola",
        "image": "/keaton-real/187-qm2020.jpg",
        "imageAlt": "QM2020 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2020",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra británica, nariz de bola",
          "QM2020",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2320N",
        "name": "QM2320N",
        "description": "Macho NPT giratorio para 2 trenzas.",
        "image": "/keaton-real/200-qm2320n.jpg",
        "imageAlt": "QM2320N SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexiones hidráulicas",
        "temperature": "Conexiones hidráulicas",
        "applications": [
          "QM2320N",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexiones hidráulicas",
          "Macho NPT giratorio para 2 trenzas.",
          "QM2320N",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2501",
        "name": "QM2501",
        "description": "Macho NPT giratoria para 2 trenzas",
        "image": "/keaton-real/201-qm2501.jpg",
        "imageAlt": "QM2501 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2501",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Macho NPT giratoria para 2 trenzas",
          "QM2501",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2711",
        "name": "QM2711",
        "description": "Conexión hembra DIN para 2 trenzas",
        "image": "/keaton-real/207-qm2711.jpg",
        "imageAlt": "QM2711 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2711",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Conexión hembra DIN para 2 trenzas",
          "QM2711",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7090",
        "name": "QM7090",
        "description": "Macho NPT para 4 mallas.",
        "image": "/keaton-real/220-qm7090.jpg",
        "imageAlt": "QM7090 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7090",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Macho NPT para 4 mallas.",
          "QM7090",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7330",
        "name": "QM7330",
        "description": "Brida código 62 para 4 mallas",
        "image": "/keaton-real/225-qm7330.jpg",
        "imageAlt": "QM7330 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7330",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 62 para 4 mallas",
          "QM7330",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7501",
        "name": "QM7501",
        "description": "Hembra DIN ligera para 4 mallas.",
        "image": "/keaton-real/229-qm7501.jpg",
        "imageAlt": "QM7501 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7501",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra DIN ligera para 4 mallas.",
          "QM7501",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7520",
        "name": "QM7520",
        "description": "Hembra DIN ligera a 90° para 2 mallas.",
        "image": "/keaton-real/230-qm7520.jpg",
        "imageAlt": "QM7520 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7520",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra DIN ligera a 90° para 2 mallas.",
          "QM7520",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM9130",
        "name": "QM9130",
        "description": "Brida código 61 para 6 mallas.",
        "image": "/keaton-real/234-qm9130.jpg",
        "imageAlt": "QM9130 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica.",
        "temperature": "Conexión hidráulica.",
        "applications": [
          "QM9130",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica.",
          "Brida código 61 para 6 mallas.",
          "QM9130",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM9170",
        "name": "QM9170",
        "description": "Brida código a 61 a 90° para 6 mallas.",
        "image": "/keaton-real/235-qm9170.jpg",
        "imageAlt": "QM9170 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Brida código a 61 a 90° para 6 mallas.",
        "temperature": "CONEXIONES HIDRÁULICAS",
        "applications": [
          "QM9170",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Brida código a 61 a 90° para 6 mallas.",
          "QM9170",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM9330",
        "name": "QM9330",
        "description": "Brida código 62 para 6 mallas.",
        "image": "/keaton-real/236-qm9330.jpg",
        "imageAlt": "QM9330 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM9330",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 62 para 6 mallas.",
          "QM9330",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM9350",
        "name": "QM9350",
        "description": "Brida código 62 a 45° para 6 mallas.",
        "image": "/keaton-real/237-qm9350.jpg",
        "imageAlt": "QM9350 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM9350",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 62 a 45° para 6 mallas.",
          "QM9350",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM9370",
        "name": "QM9370",
        "description": "Brida código 62 a 90°",
        "image": "/keaton-real/238-qm9370.jpg",
        "imageAlt": "QM9370 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM9370",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 62 a 90°",
          "QM9370",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM9711",
        "name": "QM9711",
        "description": "Hembra DIN pesada para 6 mallas.",
        "image": "/keaton-real/239-qm9711.jpg",
        "imageAlt": "QM9711 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM9711",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra DIN pesada para 6 mallas.",
          "QM9711",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM9730",
        "name": "QM9730",
        "description": "Hembra DIN pesada a 90° para 6 mallas.",
        "image": "/keaton-real/240-qm9730.jpg",
        "imageAlt": "QM9730 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica.",
        "temperature": "Conexión hidráulica.",
        "applications": [
          "QM9730",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica.",
          "Hembra DIN pesada a 90° para 6 mallas.",
          "QM9730",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2130",
        "name": "QM2130",
        "description": "Brida código 61 codo a 90°",
        "image": "/keaton-real/193-qm2130.jpg",
        "imageAlt": "QM2130 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "",
        "temperature": "CONEXIONES HIDRÁULICAS",
        "applications": [
          "QM2130",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "",
          "Brida código 61 codo a 90°",
          "QM2130",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7810",
        "name": "QM7810",
        "description": "Hembra cara plana codo a 45° para SAE100R12",
        "image": "/keaton-real/232-qm7810.jpg",
        "imageAlt": "QM7810 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "",
        "temperature": "CONEXIONES HIDRÁULICAS",
        "applications": [
          "QM7810",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "",
          "Hembra cara plana codo a 45° para SAE100R12",
          "QM7810",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7820",
        "name": "QM7820",
        "description": "Hembra cara plana codo a 90° para SAE100R12",
        "image": "/keaton-real/233-qm7820.jpg",
        "imageAlt": "QM7820 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7820",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra cara plana codo a 90° para SAE100R12",
          "QM7820",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2520",
        "name": "QM2520",
        "description": "Hembra DIN ligera codo a 90° para SAE100R2AT",
        "image": "/keaton-real/203-qm2520.jpg",
        "imageAlt": "QM2520 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2520",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra DIN ligera codo a 90° para SAE100R2AT",
          "QM2520",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2510",
        "name": "QM2510",
        "description": "Hembra DIN ligera para SAE100R2AT",
        "image": "/keaton-real/202-qm2510.jpg",
        "imageAlt": "QM2510 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2510",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra DIN ligera para SAE100R2AT",
          "QM2510",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2730",
        "name": "QM2730",
        "description": "Hembra DIN pesada codo a 90° para SAE100R2AT",
        "image": "/keaton-real/208-qm2730.jpg",
        "imageAlt": "QM2730 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2730",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra DIN pesada codo a 90° para SAE100R2AT",
          "QM2730",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7240",
        "name": "QM7240",
        "description": "Hembra JIC codo a 90° para SAE100R12",
        "image": "/keaton-real/224-qm7240.jpg",
        "imageAlt": "QM7240 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7240",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra JIC codo a 90° para SAE100R12",
          "QM7240",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2841",
        "name": "QM2841",
        "description": "Hembra métrica cara plana codo a 45° para SAE100R2AT",
        "image": "/keaton-real/215-qm2841.jpg",
        "imageAlt": "QM2841 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2841",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra métrica cara plana codo a 45° para SAE100R2AT",
          "QM2841",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2891",
        "name": "QM2891",
        "description": "Hembra métrica cara plana codo a 90° para SAE100R2AT",
        "image": "/keaton-real/216-qm2891.jpg",
        "imageAlt": "QM2891 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2891",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra métrica cara plana codo a 90° para SAE100R2AT",
          "QM2891",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2801",
        "name": "QM2801",
        "description": "Hembra métrica cara plana para SAE100R2AT",
        "image": "/keaton-real/210-qm2801.jpg",
        "imageAlt": "QM2801 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2801",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra métrica cara plana para SAE100R2AT",
          "QM2801",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2940",
        "name": "QM2940",
        "description": "Hembra métrica karcher",
        "image": "/keaton-real/217-qm2940.jpg",
        "imageAlt": "QM2940 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2940",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra métrica karcher",
          "QM2940",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2680",
        "name": "QM2680",
        "description": "Hembra métrica komatsu JIS cono 60° para 100R2AT",
        "image": "/keaton-real/206-qm2680.jpg",
        "imageAlt": "QM2680 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2680",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra métrica komatsu JIS cono 60° para 100R2AT",
          "QM2680",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2540",
        "name": "QM2540",
        "description": "Hembra SAE asiento a 45° para SAE100R2AT",
        "image": "/keaton-real/204-qm2540.jpg",
        "imageAlt": "QM2540 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2540",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra SAE asiento a 45° para SAE100R2AT",
          "QM2540",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2650",
        "name": "QM2650",
        "description": "Macho DIN ligero para SAE100R2AT",
        "image": "/keaton-real/205-qm2650.jpg",
        "imageAlt": "QM2650 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2650",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Macho DIN ligero para SAE100R2AT",
          "QM2650",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2804",
        "name": "QM2804",
        "description": "Macho métrico cara plana para SAE100R2AT",
        "image": "/keaton-real/211-qm2804.jpg",
        "imageAlt": "QM2804 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2804",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Macho métrico cara plana para SAE100R2AT",
          "QM2804",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "301-L",
        "name": "301-L",
        "description": "Conexión ACA para manguera de aire acondicionado",
        "image": "/keaton-real/001-301-l.jpg",
        "imageAlt": "301-L SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión ACA para manguera de aire acondicionado",
        "temperature": "Conexión ACA para manguera de aire acondicionado",
        "applications": [
          "301-L",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión ACA para manguera de aire acondicionado",
          "301-L",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "KL-REUS609",
        "name": "KL-REUS609",
        "description": "Conexión latón reusable",
        "image": "/keaton-real/148-kl-reus609.jpg",
        "imageAlt": "KL-REUS609 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión latón reusable",
        "temperature": "Conexión latón reusable",
        "applications": [
          "KL-REUS609",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión latón reusable",
          "KL-REUS609",
          "CONEXIONES HIDRÁULICAS",
          "Conexiones Reusables",
          "Latón"
        ]
      },
      {
        "code": "NYCST",
        "name": "NYCST",
        "description": "Manguera helcoidal de nylon c/ conexiones",
        "image": "/keaton-real/182-nycst.jpg",
        "imageAlt": "NYCST SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera helcoidal de nylon c/ conexiones",
        "temperature": "NYCST",
        "applications": [
          "NYCST",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera helcoidal de nylon c/ conexiones",
          "NYCST",
          "Helicoidal",
          "MANGUERA",
          "Nylon"
        ]
      },
      {
        "code": "PUC",
        "name": "PUC",
        "description": "Manguera helicoidal de poliuretano con conexiones",
        "image": "/keaton-real/186-puc.jpg",
        "imageAlt": "PUC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera helicoidal de poliuretano con conexiones",
        "temperature": "PUC",
        "applications": [
          "PUC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera helicoidal de poliuretano con conexiones",
          "PUC",
          "Helicoidal",
          "MANGUERA",
          "Poliuretano"
        ]
      },
      {
        "code": "KL-FA-P09",
        "name": "KL-FA-P09",
        "description": "Conexión de latón para frenos de aire",
        "image": "/keaton-real/137-kl-fa-p09.jpg",
        "imageAlt": "KL-FA-P09 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión de latón para frenos de aire",
        "temperature": "Conexión de latón para frenos de aire",
        "applications": [
          "KL-FA-P09",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión de latón para frenos de aire",
          "KL-FA-P09",
          "CONEXIONES HIDRÁULICAS",
          "Conexiones Reusables",
          "Latón"
        ]
      },
      {
        "code": "KL-FA-P09",
        "name": "KL-FA-P09",
        "description": "Conexión crimpable macho NPT latón frenos de aire",
        "image": "/keaton-real/137-kl-fa-p09.jpg",
        "imageAlt": "KL-FA-P09 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conexión crimpable macho NPT latón frenos de aire",
        "applications": [
          "KL-FA-P09",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conexión crimpable macho NPT latón frenos de aire",
          "KL-FA-P09",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KL-REUS602",
        "name": "KL-REUS602",
        "description": "Conexión latón reusable",
        "image": "/keaton-real/147-kl-reus602.jpg",
        "imageAlt": "KL-REUS602 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión",
        "temperature": "Conexión",
        "applications": [
          "KL-REUS602",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión",
          "Conexión latón reusable",
          "KL-REUS602",
          "CONEXIONES HIDRÁULICAS",
          "Conexiones Reusables"
        ]
      }
    ]
  },
  {
    "id": "especiales",
    "label": "Especiales / químicos",
    "summary": "Especiales / químicos",
    "image": "/keaton/036-el4.svg",
    "imageAlt": "EL4 SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "EL4",
        "name": "EL4",
        "description": "Codo de silicón color azul a 45°",
        "image": "/keaton-real/012-el4.png",
        "imageAlt": "EL4 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Codo de silicón color azul a 45°",
        "temperature": "Codo de silicón color azul a 45°",
        "applications": [
          "EL4",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Codo de silicón color azul a 45°",
          "EL4",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "EL9",
        "name": "EL9",
        "description": "Codo de silicón color azul a 90°",
        "image": "/keaton-real/013-el9.png",
        "imageAlt": "EL9 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Codo de silicón color azul a 90°",
        "temperature": "Codo de silicón color azul a 90°",
        "applications": [
          "EL9",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Codo de silicón color azul a 90°",
          "EL9",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "GASOIL",
        "name": "GASOIL",
        "description": "Ficha técnica GASOIL",
        "image": "/keaton-real/015-gasoil.jpg",
        "imageAlt": "GASOIL SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera para aceite y gasolina color negro",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "GASOIL",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera para aceite y gasolina color negro",
          "Ficha técnica GASOIL",
          "GASOIL",
          "MANGUERA INDUSTRIAL",
          "Mangueras de Hule"
        ]
      },
      {
        "code": "HEAT",
        "name": "HEAT",
        "description": "Manguera de silicón para calefacción.",
        "image": "/keaton-real/016-heat.png",
        "imageAlt": "HEAT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera de silicón para calefacción.",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "HEAT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera de silicón para calefacción.",
          "HEAT",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "ORFX",
        "name": "ORFX",
        "description": "Manguera orangeflex",
        "image": "/keaton-real/183-orfx.jpg",
        "imageAlt": "ORFX SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera orangeflex",
        "temperature": "Mangueras de PVC",
        "applications": [
          "ORFX",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera orangeflex",
          "ORFX",
          "MANGUERA INDUSTRIAL",
          "Mangueras de PVC",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "PLIOVIC",
        "name": "PLIOVIC",
        "description": "Pliovic MP azul 250 plus",
        "image": "/keaton-real/185-pliovic.jpg",
        "imageAlt": "PLIOVIC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Pliovic MP azul 250 plus",
        "temperature": "PLIOVIC",
        "applications": [
          "PLIOVIC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Pliovic MP azul 250 plus",
          "PLIOVIC",
          "MANGUERAS HIDRÁULICAS",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "SRAD",
        "name": "SRAD",
        "description": "Manguera recta de silicón de 1 metro de longitud.",
        "image": "/keaton-real/250-srad.png",
        "imageAlt": "SRAD SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera recta de silicón de 1 metro de longitud.",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SRAD",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera recta de silicón de 1 metro de longitud.",
          "SRAD",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "TUR",
        "name": "TUR",
        "description": "Manguera de turbo",
        "image": "/keaton-real/251-tur.jpg",
        "imageAlt": "TUR SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera de turbo",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "TUR",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera de turbo",
          "TUR",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "CAC",
        "name": "CAC",
        "description": "Para enfriador de admisión enfriador de admisión con anillos.",
        "image": "/keaton-real/009-cac.png",
        "imageAlt": "CAC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera de silicón",
        "temperature": "CAC",
        "applications": [
          "CAC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera de silicón",
          "Para enfriador de admisión enfriador de admisión con anillos.",
          "CAC",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "KEN-MP",
        "name": "KEN-MP",
        "description": "Espiga neumática macho NPT",
        "image": "/keaton-real/023-ken-mp.jpg",
        "imageAlt": "KEN-MP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Espiga neumática macho NPT",
        "temperature": "COPLE RÁPIDO",
        "applications": [
          "KEN-MP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Espiga neumática macho NPT",
          "KEN-MP",
          "COPLE RÁPIDO",
          "Neumático",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "ABG",
        "name": "ABG",
        "description": "Pistola de sopleteo",
        "image": "/keaton-real/003-abg.png",
        "imageAlt": "ABG SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Pistola de sopleteo",
        "temperature": "CONEXIÓN NEUMÁTICA",
        "applications": [
          "ABG",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Pistola de sopleteo",
          "ABG",
          "CONEXIÓN NEUMÁTICA",
          "Validación técnica SCENA",
          "Tags:"
        ]
      }
    ]
  },
  {
    "id": "frenos-aire",
    "label": "Frenos de aire",
    "summary": "Frenos de aire",
    "image": "/keaton/031-airbrake.svg",
    "imageAlt": "AIRBRAKE SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "AIRBRAKE",
        "name": "AIRBRAKE",
        "description": "Es la manguera por excelencia de aplicación en el servicio pesado. FICHA TÉCNICA AIRBRAKE SCENA",
        "image": "/keaton-real/004-airbrake.png",
        "imageAlt": "AIRBRAKE SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "",
        "temperature": "FICHA TÉCNICA AIRBRAKE SCENA",
        "applications": [
          "AIRBRAKE",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "",
          "Es la manguera por excelencia de aplicación en el servicio pesado.",
          "FICHA TÉCNICA AIRBRAKE SCENA",
          "AIRBRAKE",
          "MANGUERA INDUSTRIAL"
        ]
      },
      {
        "code": "ABASSY",
        "name": "ABASSY",
        "description": "Ensamble para frenos de aire.",
        "image": "/keaton-real/002-abassy.png",
        "imageAlt": "ABASSY SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Ensamble para frenos de aire.",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "ABASSY",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Ensamble para frenos de aire.",
          "ABASSY",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "BARRIER",
        "name": "BARRIER",
        "description": "Dayco Barrier SAE J2064/J51",
        "image": "/keaton-real/008-barrier.jpg",
        "imageAlt": "BARRIER SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Dayco Barrier SAE J2064/J51",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "BARRIER",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Dayco Barrier SAE J2064/J51",
          "BARRIER",
          "ADAPTADORES",
          "Standard",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "DL-COILHOSE",
        "name": "DL-COILHOSE",
        "description": "Doble refuerzo.",
        "image": "/keaton-real/011-dl-coilhose.jpg",
        "imageAlt": "DL-COILHOSE SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera helicoidal azul y roja para frenos de aire.",
        "temperature": "DL-COILHOSE",
        "applications": [
          "DL-COILHOSE",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera helicoidal azul y roja para frenos de aire.",
          "Doble refuerzo.",
          "DL-COILHOSE",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "SL-COILHOSE",
        "name": "SL-COILHOSE",
        "description": "Manguera helicoidal azul y roja para frenos de aire, refuerzo simple.",
        "image": "/keaton-real/246-sl-coilhose.png",
        "imageAlt": "SL-COILHOSE SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera frenos de aire",
        "temperature": "SL-COILHOSE",
        "applications": [
          "SL-COILHOSE",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera frenos de aire",
          "Manguera helicoidal azul y roja para frenos de aire, refuerzo simple.",
          "SL-COILHOSE",
          "Frenos de aire",
          "MANGUERA"
        ]
      },
      {
        "code": "MPFAAZ",
        "name": "MPFAAZ",
        "description": "Tubing de nylon para frenos de aire color azul",
        "image": "/keaton-real/179-mpfaaz.jpg",
        "imageAlt": "MPFAAZ SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Tubing de nylon para frenos de aire color azul",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "MPFAAZ",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Tubing de nylon para frenos de aire color azul",
          "MPFAAZ",
          "Nylon",
          "TUBING",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "MPFARO",
        "name": "MPFARO",
        "description": "Tubing de nylon para frenos de aire color rojo",
        "image": "/keaton-real/181-mpfaro.jpg",
        "imageAlt": "MPFARO SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Tubing de nylon para frenos de aire color rojo",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "MPFARO",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Tubing de nylon para frenos de aire color rojo",
          "MPFARO",
          "Nylon",
          "TUBING",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "MPFANE",
        "name": "MPFANE",
        "description": "Tubing de nylon para frenos de aire color negro",
        "image": "/keaton-real/180-mpfane.jpg",
        "imageAlt": "MPFANE SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Tubing de nylon para frenos de aire color negro",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "MPFANE",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Tubing de nylon para frenos de aire color negro",
          "MPFANE",
          "Nylon",
          "TUBING",
          "Validación técnica SCENA"
        ]
      }
    ]
  },
  {
    "id": "mangueras-hidraulicas",
    "label": "Mangueras hidráulicas",
    "summary": "Mangueras hidráulicas",
    "image": "/keaton/001-manguera-trucker-k5.svg",
    "imageAlt": "Manguera TRUCKER K5 SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "Manguera TRUCKER K5",
        "name": "Manguera TRUCKER K5",
        "description": "Transferencia de fluidos hidráulicos a alta presión que utilicen soluciones antifreeze. Ficha técnica K5 SCENA",
        "image": "/keaton-real/173-manguera-trucker-k5.jpg",
        "imageAlt": "Manguera TRUCKER K5 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera SAE 100R5",
        "temperature": "Manguera TRUCKER K5",
        "applications": [
          "Manguera TRUCKER K5",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera SAE 100R5",
          "Transferencia de fluidos hidráulicos a alta presión que utilicen soluciones antifreeze.",
          "Ficha técnica K5 SCENA",
          "Manguera TRUCKER K5",
          "MANGUERAS HIDRÁULICAS"
        ]
      },
      {
        "code": "Manguera K302",
        "name": "Manguera K302",
        "description": "Manguera de hule para uso en circuitos hidráulicos en equipos para alta presión. Ficha técnica K302",
        "image": "/keaton-real/170-manguera-k302.jpg",
        "imageAlt": "Manguera K302 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera SAE100 R2",
        "temperature": "MANGUERAS HIDRÁULICAS",
        "applications": [
          "Manguera K302",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera SAE100 R2",
          "Manguera de hule para uso en circuitos hidráulicos en equipos para alta presión.",
          "Ficha técnica K302",
          "Manguera K302",
          "MANGUERAS HIDRÁULICAS"
        ]
      },
      {
        "code": "Manguera K6",
        "name": "Manguera K6",
        "description": "Manguera de hule para la conducción de fluidos hidráulicos, gasolina, diesel y derivados del petróleo a baja presión. Ficha técnica K6 SCENA",
        "image": "/keaton-real/172-manguera-k6.jpg",
        "imageAlt": "Manguera K6 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera SAE100 R6",
        "temperature": "MANGUERAS HIDRÁULICAS",
        "applications": [
          "Manguera K6",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera SAE100 R6",
          "Manguera de hule para la conducción de fluidos hidráulicos, gasolina, diesel y derivados del petróleo a baja presión.",
          "Ficha técnica K6 SCENA",
          "Manguera K6",
          "MANGUERAS HIDRÁULICAS"
        ]
      },
      {
        "code": "Manguera K17",
        "name": "Manguera K17",
        "description": "Para tuberías de aceite hidráulico de presión alta. FT_K17 SCENA",
        "image": "/keaton-real/169-manguera-k17.jpg",
        "imageAlt": "Manguera K17 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera con presión constante (Isobárica) 210 bar / 3045 psi en todos los tamaños. El radio de curvatura pequeño es una ventaja en las instalaciones.",
        "temperature": "MANGUERAS HIDRÁULICAS",
        "applications": [
          "Manguera K17",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "MANGUERA SAE100R17 K17",
          "Para tuberías de aceite hidráulico de presión alta.",
          "FT_K17 SCENA",
          "Manguera K17",
          "MANGUERAS HIDRÁULICAS"
        ]
      },
      {
        "code": "Manguera K5000",
        "name": "Manguera K5000",
        "description": "Ficha técnica K5000 SCENA",
        "image": "/keaton-real/171-manguera-k5000.jpg",
        "imageAlt": "Manguera K5000 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera SAE 100R13",
        "temperature": "MANGUERAS HIDRÁULICAS",
        "applications": [
          "Manguera K5000",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera SAE 100R13",
          "Ficha técnica K5000 SCENA",
          "Manguera K5000",
          "MANGUERAS HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2150",
        "name": "QM2150",
        "description": "Brida código 61 a 45° para manguera SAE100R2AT",
        "image": "/keaton-real/194-qm2150.jpg",
        "imageAlt": "QM2150 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2150",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 61 a 45° para manguera SAE100R2AT",
          "QM2150",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2170",
        "name": "QM2170",
        "description": "Brida código 61 codo a 90° para manguera SAE100R2AT",
        "image": "/keaton-real/195-qm2170.jpg",
        "imageAlt": "QM2170 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2170",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 61 codo a 90° para manguera SAE100R2AT",
          "QM2170",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7150",
        "name": "QM7150",
        "description": "Brida código 61 codo a 45° para manguera SAE100R12",
        "image": "/keaton-real/222-qm7150.jpg",
        "imageAlt": "QM7150 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7150",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 61 codo a 45° para manguera SAE100R12",
          "QM7150",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7170",
        "name": "QM7170",
        "description": "Brida código 61 codo a 90° para manguera SAE100R12",
        "image": "/keaton-real/223-qm7170.jpg",
        "imageAlt": "QM7170 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7170",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 61 codo a 90° para manguera SAE100R12",
          "QM7170",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7130",
        "name": "QM7130",
        "description": "Brida código 61 para manguera SAE100R12",
        "image": "/keaton-real/221-qm7130.jpg",
        "imageAlt": "QM7130 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Brida código 61 para manguera SAE100R12",
        "temperature": "CONEXIONES HIDRÁULICAS",
        "applications": [
          "QM7130",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Brida código 61 para manguera SAE100R12",
          "QM7130",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA",
          "Conexiones Permanentes"
        ]
      },
      {
        "code": "QM7353",
        "name": "QM7353",
        "description": "Brida código 62 caterpillar codo a 45° para manguera SAE100R12",
        "image": "/keaton-real/227-qm7353.jpg",
        "imageAlt": "QM7353 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7353",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 62 caterpillar codo a 45° para manguera SAE100R12",
          "QM7353",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7373",
        "name": "QM7373",
        "description": "Brida código 62 caterpillar para manguera SAE100R12",
        "image": "/keaton-real/228-qm7373.jpg",
        "imageAlt": "QM7373 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7373",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 62 caterpillar para manguera SAE100R12",
          "QM7373",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM7333",
        "name": "QM7333",
        "description": "Brida código 62 caterpillar para manguera SAE100R12",
        "image": "/keaton-real/226-qm7333.jpg",
        "imageAlt": "QM7333 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM7333",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Brida código 62 caterpillar para manguera SAE100R12",
          "QM7333",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2260",
        "name": "QM2260",
        "description": "Hembra BSPP codo a 90°, cono 60° para manguera SAE100R2AT",
        "image": "/keaton-real/199-qm2260.jpg",
        "imageAlt": "QM2260 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2260",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra BSPP codo a 90°, cono 60° para manguera SAE100R2AT",
          "QM2260",
          "CONEXIONES HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "QM2129",
        "name": "QM2129",
        "description": "Hembra codo a 90° BSP JIS 60° Conexión para manguera SAE100R2AT",
        "image": "/keaton-real/192-qm2129.jpg",
        "imageAlt": "QM2129 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Conexión hidráulica",
        "temperature": "Conexión hidráulica",
        "applications": [
          "QM2129",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Conexión hidráulica",
          "Hembra codo a 90° BSP JIS 60°",
          "Conexión para manguera SAE100R2AT",
          "QM2129",
          "CONEXIONES HIDRÁULICAS"
        ]
      }
    ]
  },
  {
    "id": "mangueras-industriales",
    "label": "Mangueras industriales",
    "summary": "Mangueras industriales",
    "image": "/keaton/019-miro.svg",
    "imageAlt": "MIRO SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "MIRO",
        "name": "MIRO",
        "description": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "image": "/keaton-real/178-miro.jpg",
        "imageAlt": "MIRO SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie.",
        "temperature": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "applications": [
          "MIRO",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie.",
          "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
          "MIRO",
          "MANGUERA INDUSTRIAL",
          "Mangueras de Hule"
        ]
      },
      {
        "code": "MIAM",
        "name": "MIAM",
        "description": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "image": "/keaton-real/174-miam.jpg",
        "imageAlt": "MIAM SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie.",
        "temperature": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "applications": [
          "MIAM",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie.",
          "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
          "MIAM",
          "MANGUERA INDUSTRIAL",
          "Mangueras de Hule"
        ]
      },
      {
        "code": "MIAZ",
        "name": "MIAZ",
        "description": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "image": "/keaton-real/175-miaz.jpg",
        "imageAlt": "MIAZ SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie",
        "temperature": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "applications": [
          "MIAZ",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie",
          "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
          "MIAZ",
          "MANGUERA INDUSTRIAL",
          "Mangueras de Hule"
        ]
      },
      {
        "code": "MINE",
        "name": "MINE",
        "description": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "image": "/keaton-real/176-mine.png",
        "imageAlt": "MINE SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie.",
        "temperature": "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
        "applications": [
          "MINE",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera Multipropósitos que cuenta con resistencia al aceite, a la abrasión y muy buena resistencia a la intemperie.",
          "FICHA TÉCNICA MULTIPROPOSITOS SCENA",
          "MINE",
          "MANGUERA INDUSTRIAL",
          "Mangueras de Hule"
        ]
      },
      {
        "code": "MIPVC",
        "name": "MIPVC",
        "description": "Manguera multipropósitos color rojo",
        "image": "/keaton-real/177-mipvc.png",
        "imageAlt": "MIPVC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera multipropósitos color rojo",
        "temperature": "MIPVC",
        "applications": [
          "MIPVC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera multipropósitos color rojo",
          "MIPVC",
          "MANGUERA INDUSTRIAL",
          "Mangueras de PVC",
          "Validación técnica SCENA"
        ]
      }
    ]
  },
  {
    "id": "otros",
    "label": "Otros componentes",
    "summary": "Otros componentes",
    "image": "/keaton/094-kl-462f.svg",
    "imageAlt": "KL-462F SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "KL-462F",
        "name": "KL-462F",
        "description": "Unión tubería de cobre",
        "image": "/keaton-real/094-kl-462f.jpg",
        "imageAlt": "KL-462F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Unión tubería de cobre",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-462F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Unión tubería de cobre",
          "KL-462F",
          "ADAPTADORES",
          "De Latón",
          "Frenos de aire tubería de cobre"
        ]
      },
      {
        "code": "KL-464F",
        "name": "KL-464F",
        "description": "Tee unión para tubo de cobre",
        "image": "/keaton-real/095-kl-464f.jpg",
        "imageAlt": "KL-464F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Tee unión para tubo de cobre",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-464F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Tee unión para tubo de cobre",
          "KL-464F",
          "ADAPTADORES",
          "De Latón",
          "Frenos de aire tubería de cobre"
        ]
      },
      {
        "code": "KL-465F",
        "name": "KL-465F",
        "description": "Unión codo a 90° para tubo de cobre",
        "image": "/keaton-real/096-kl-465f.jpg",
        "imageAlt": "KL-465F SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Unión codo a 90° para tubo de cobre",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KL-465F",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Unión codo a 90° para tubo de cobre",
          "KL-465F",
          "ADAPTADORES",
          "De Latón",
          "Frenos de aire tubería de cobre"
        ]
      },
      {
        "code": "KL-L54",
        "name": "KL-L54",
        "description": "Conector Loc a hembra SAE",
        "image": "/keaton-real/144-kl-l54.jpg",
        "imageAlt": "KL-L54 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "",
        "temperature": "Conector Loc a hembra SAE",
        "applications": [
          "KL-L54",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "",
          "Conector Loc a hembra SAE",
          "KL-L54",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "KL-L90",
        "name": "KL-L90",
        "description": "Unión manguera",
        "image": "/keaton-real/145-kl-l90.jpg",
        "imageAlt": "KL-L90 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "",
        "temperature": "CONEXIÓN LOCK ON",
        "applications": [
          "KL-L90",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "",
          "Unión manguera",
          "KL-L90",
          "ADAPTADORES",
          "CONEXIÓN LOCK ON"
        ]
      },
      {
        "code": "KLQ-54-DOT",
        "name": "KLQ-54-DOT",
        "description": "Macho codo a 45°",
        "image": "/keaton-real/150-klq-54-dot.jpg",
        "imageAlt": "KLQ-54-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-54-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "",
          "Macho codo a 45°",
          "KLQ-54-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-62-DOT",
        "name": "KLQ-62-DOT",
        "description": "Unión push in dot.",
        "image": "/keaton-real/151-klq-62-dot.jpg",
        "imageAlt": "KLQ-62-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón.",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-62-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón.",
          "Unión push in dot.",
          "KLQ-62-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-64-DOT",
        "name": "KLQ-64-DOT",
        "description": "Tee unión",
        "image": "/keaton-real/152-klq-64-dot.jpg",
        "imageAlt": "KLQ-64-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón, push in dot",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-64-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón, push in dot",
          "Tee unión",
          "KLQ-64-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-68-DOT",
        "name": "KLQ-68-DOT",
        "description": "Conector macho a NPT",
        "image": "/keaton-real/153-klq-68-dot.jpg",
        "imageAlt": "KLQ-68-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Conector macho a NPT",
        "applications": [
          "KLQ-68-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Conector macho a NPT",
          "KLQ-68-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-69-DOT",
        "name": "KLQ-69-DOT",
        "description": "Push in dot",
        "image": "/keaton-real/154-klq-69-dot.jpg",
        "imageAlt": "KLQ-69-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-69-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Push in dot",
          "KLQ-69-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-69S-DOT",
        "name": "KLQ-69S-DOT",
        "description": "Codo a 90° macho giratorio",
        "image": "/keaton-real/155-klq-69s-dot.jpg",
        "imageAlt": "KLQ-69S-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Codo a 90° macho giratorio",
        "applications": [
          "KLQ-69S-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Codo a 90° macho giratorio",
          "KLQ-69S-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-71-DOT",
        "name": "KLQ-71-DOT",
        "description": "Tee unión macho lateral push in dot",
        "image": "/keaton-real/156-klq-71-dot.jpg",
        "imageAlt": "KLQ-71-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-71-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee unión macho lateral push in dot",
          "KLQ-71-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-72-DOT",
        "name": "KLQ-72-DOT",
        "description": "Tee con macho al centro",
        "image": "/keaton-real/158-klq-72-dot.jpg",
        "imageAlt": "KLQ-72-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-72-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con macho al centro",
          "KLQ-72-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KLQ-77-DOT",
        "name": "KLQ-77-DOT",
        "description": "Tee con hembra en el centro",
        "image": "/keaton-real/159-klq-77-dot.jpg",
        "imageAlt": "KLQ-77-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-77-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee con hembra en el centro",
          "KLQ-77-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "MANGABK2",
        "name": "MANGABK2",
        "description": "Manga para manguera de 2 mallas",
        "image": "/keaton-real/168-mangabk2.jpg",
        "imageAlt": "MANGABK2 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manga para manguera de 2 mallas",
        "temperature": "Compartir en Facebook",
        "applications": [
          "MANGABK2",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manga para manguera de 2 mallas",
          "MANGABK2",
          "Manga para manguera",
          "MANGUERA INDUSTRIAL",
          "Tags:"
        ]
      },
      {
        "code": "PDV",
        "name": "PDV",
        "description": "Grifo de jalón",
        "image": "/keaton-real/184-pdv.jpg",
        "imageAlt": "PDV SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "PDV",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Grifo de jalón",
          "PDV",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "SL",
        "name": "SL",
        "description": "Manguera de silicón tipo linterna color negro",
        "image": "/keaton-real/245-sl.png",
        "imageAlt": "SL SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera de silicón tipo linterna color negro",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SL",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera de silicón tipo linterna color negro",
          "SL",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "SEL9R",
        "name": "SEL9R",
        "description": "Codo reductor azul",
        "image": "/keaton-real/241-sel9r.jpg",
        "imageAlt": "SEL9R SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Silicón",
        "temperature": "Codo reductor azul",
        "applications": [
          "SEL9R",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Silicón",
          "Codo reductor azul",
          "SEL9R",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "KL-394C",
        "name": "KL-394C",
        "description": "Válvula de aguja rosca hembra a rosca hembra",
        "image": "/keaton-real/064-kl-394c.jpg",
        "imageAlt": "KL-394C SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Válvula de aguja rosca hembra a rosca hembra",
        "temperature": "KL-394C",
        "applications": [
          "KL-394C",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Válvula de aguja rosca hembra a rosca hembra",
          "KL-394C",
          "De aguja",
          "VÁLVULA",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "ALFAC",
        "name": "ALFAC",
        "description": "Férula de aluminio para aire acondicionado",
        "image": "/keaton-real/006-alfac.png",
        "imageAlt": "ALFAC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Férula",
        "temperature": "ALFAC",
        "applications": [
          "ALFAC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Férula",
          "Férula de aluminio para aire acondicionado",
          "ALFAC",
          "Aluminio",
          "FERULA"
        ]
      },
      {
        "code": "ALLS",
        "name": "ALLS",
        "description": "Espiga de aluminio salvavidas",
        "image": "/keaton-real/007-alls.png",
        "imageAlt": "ALLS SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Espiga",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "ALLS",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Espiga",
          "Espiga de aluminio salvavidas",
          "ALLS",
          "Aluminio",
          "ESPIGA"
        ]
      },
      {
        "code": "AL-NU",
        "name": "AL-NU",
        "description": "Set unión para manguera industrial",
        "image": "/keaton-real/005-al-nu.jpg",
        "imageAlt": "AL-NU SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Set unión para manguera industrial",
        "temperature": "CONEXION INDUSTRIAL",
        "applications": [
          "AL-NU",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Set unión para manguera industrial",
          "AL-NU",
          "CONEXION INDUSTRIAL",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "CHKV",
        "name": "CHKV",
        "description": "Válvula check",
        "image": "/keaton-real/010-chkv.png",
        "imageAlt": "CHKV SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Válvulas",
        "temperature": "CHKV",
        "applications": [
          "CHKV",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Válvulas",
          "Válvula check",
          "CHKV",
          "Check",
          "VÁLVULA"
        ]
      },
      {
        "code": "FRESH",
        "name": "FRESH",
        "description": "Manguera para aire acondicionado 4826 TYPO C",
        "image": "/keaton-real/014-fresh.jpg",
        "imageAlt": "FRESH SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera",
        "temperature": "Manguera para aire acondicionado 4826 TYPO C",
        "applications": [
          "FRESH",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera",
          "Manguera para aire acondicionado 4826 TYPO C",
          "FRESH",
          "Aire acondicionado",
          "MANGUERA"
        ]
      },
      {
        "code": "HPBV",
        "name": "HPBV",
        "description": "Válvula de bola de alta presión 2 vías",
        "image": "/keaton-real/017-hpbv.png",
        "imageAlt": "HPBV SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Válvula",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "HPBV",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Válvula",
          "Válvula de bola de alta presión 2 vías",
          "HPBV",
          "De bola",
          "VÁLVULA"
        ]
      },
      {
        "code": "KR4",
        "name": "KR4",
        "description": "Manguera succión y retorno",
        "image": "/keaton-real/161-kr4.jpg",
        "imageAlt": "KR4 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera succión y retorno",
        "temperature": "MANGUERAS HIDRÁULICAS",
        "applications": [
          "KR4",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera succión y retorno",
          "KR4",
          "Baja presión",
          "MANGUERAS HIDRÁULICAS",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "KCN-FP",
        "name": "KCN-FP",
        "description": "Cople neumático hembra",
        "image": "/keaton-real/018-kcn-fp.jpg",
        "imageAlt": "KCN-FP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Cople neumático hembra",
        "temperature": "Cople neumático hembra",
        "applications": [
          "KCN-FP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Cople neumático hembra",
          "KCN-FP",
          "COPLE RÁPIDO",
          "Neumático",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "KCN-LOC",
        "name": "KCN-LOC",
        "description": "Cople neumático a manguera",
        "image": "/keaton-real/019-kcn-loc.jpg",
        "imageAlt": "KCN-LOC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Cople neumático a manguera",
        "temperature": "Cople neumático a manguera",
        "applications": [
          "KCN-LOC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Cople neumático a manguera",
          "KCN-LOC",
          "COPLE RÁPIDO",
          "Neumático",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "KCN-MP",
        "name": "KCN-MP",
        "description": "Cople neumático macho NPT",
        "image": "/keaton-real/020-kcn-mp.jpg",
        "imageAlt": "KCN-MP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Cople neumático macho NPT",
        "temperature": "Cople neumático macho NPT",
        "applications": [
          "KCN-MP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Cople neumático macho NPT",
          "KCN-MP",
          "COPLE RÁPIDO",
          "Neumático",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "KEN-FP",
        "name": "KEN-FP",
        "description": "Espiga neumática hembra",
        "image": "/keaton-real/021-ken-fp.jpg",
        "imageAlt": "KEN-FP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Espiga neumática hembra",
        "temperature": "COPLE RÁPIDO",
        "applications": [
          "KEN-FP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Espiga neumática hembra",
          "KEN-FP",
          "COPLE RÁPIDO",
          "Neumático",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "KEN-LOC",
        "name": "KEN-LOC",
        "description": "Espiga neumática a manguera",
        "image": "/keaton-real/022-ken-loc.jpg",
        "imageAlt": "KEN-LOC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Espiga neumática a manguera",
        "temperature": "KEN-LOC",
        "applications": [
          "KEN-LOC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Espiga neumática a manguera",
          "KEN-LOC",
          "COPLE RÁPIDO",
          "Neumático",
          "Validación técnica SCENA"
        ]
      },
      {
        "code": "LTCN-MP",
        "name": "LTCN-MP",
        "description": "Cople neumático de latón macho NPT",
        "image": "/keaton-real/164-ltcn-mp.jpg",
        "imageAlt": "LTCN-MP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Cople neumático de latón macho NPT",
        "temperature": "Cople neumático de latón macho NPT",
        "applications": [
          "LTCN-MP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Cople neumático de latón macho NPT",
          "LTCN-MP",
          "COPLE RÁPIDO",
          "Latón",
          "Neumático"
        ]
      },
      {
        "code": "LTCN-LOC",
        "name": "LTCN-LOC",
        "description": "Cople neumático de latón",
        "image": "/keaton-real/163-ltcn-loc.jpg",
        "imageAlt": "LTCN-LOC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Cople neumático de latón",
        "temperature": "Cople neumático de latón",
        "applications": [
          "LTCN-LOC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Cople neumático de latón",
          "LTCN-LOC",
          "COPLE RÁPIDO",
          "Latón",
          "Neumático"
        ]
      },
      {
        "code": "LTCN-FP",
        "name": "LTCN-FP",
        "description": "Cople neumático de latón hembra",
        "image": "/keaton-real/162-ltcn-fp.jpg",
        "imageAlt": "LTCN-FP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Cople neumático de latón hembra",
        "temperature": "Cople neumático de latón hembra",
        "applications": [
          "LTCN-FP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Cople neumático de latón hembra",
          "LTCN-FP",
          "COPLE RÁPIDO",
          "Latón",
          "Neumático"
        ]
      },
      {
        "code": "LTEN-FP",
        "name": "LTEN-FP",
        "description": "Espiga neumática latón hembra",
        "image": "/keaton-real/165-lten-fp.jpg",
        "imageAlt": "LTEN-FP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Espiga neumática latón hembra",
        "temperature": "COPLE RÁPIDO",
        "applications": [
          "LTEN-FP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Espiga neumática latón hembra",
          "LTEN-FP",
          "COPLE RÁPIDO",
          "Latón",
          "Neumático"
        ]
      },
      {
        "code": "LTEN-MP",
        "name": "LTEN-MP",
        "description": "Espiga neumática latón macho",
        "image": "/keaton-real/167-lten-mp.jpg",
        "imageAlt": "LTEN-MP SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Espiga neumática latón macho",
        "temperature": "COPLE RÁPIDO",
        "applications": [
          "LTEN-MP",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Espiga neumática latón macho",
          "LTEN-MP",
          "COPLE RÁPIDO",
          "Latón",
          "Neumático"
        ]
      },
      {
        "code": "LTEN-LOC",
        "name": "LTEN-LOC",
        "description": "Espiga neumática latón a manguera",
        "image": "/keaton-real/166-lten-loc.jpg",
        "imageAlt": "LTEN-LOC SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Espiga neumática latón a manguera",
        "temperature": "LTEN-LOC",
        "applications": [
          "LTEN-LOC",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Espiga neumática latón a manguera",
          "LTEN-LOC",
          "COPLE RÁPIDO",
          "Latón",
          "Neumático"
        ]
      },
      {
        "code": "KIT-NEU",
        "name": "KIT-NEU",
        "description": "Kit de accesorios para aire",
        "image": "/keaton-real/024-kit-neu.png",
        "imageAlt": "KIT-NEU SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Kit de accesorios para aire",
        "temperature": "CONEXIÓN NEUMÁTICA",
        "applications": [
          "KIT-NEU",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Kit de accesorios para aire",
          "KIT-NEU",
          "CONEXIÓN NEUMÁTICA",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "KLQ-71S-DOT",
        "name": "KLQ-71S-DOT",
        "description": "Tee unión con macho lateral giratorio",
        "image": "/keaton-real/157-klq-71s-dot.jpg",
        "imageAlt": "KLQ-71S-DOT SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Adaptador de latón",
        "temperature": "Validación técnica SCENA",
        "applications": [
          "KLQ-71S-DOT",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Adaptador de latón",
          "Tee unión con macho lateral giratorio",
          "KLQ-71S-DOT",
          "ADAPTADORES",
          "De Latón"
        ]
      },
      {
        "code": "KPH148",
        "name": "KPH148",
        "description": "Manguera termoplástica negra (TP74) SAE100R7 conductiva 1/4″ (2,830 psi)",
        "image": "/keaton-real/160-kph148.jpg",
        "imageAlt": "KPH148 SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "Manguera termoplástica negra (TP74) SAE100R7 conductiva 1/4″ (2,830 psi)",
        "temperature": "MANGUERAS HIDRÁULICAS",
        "applications": [
          "KPH148",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Manguera termoplástica",
          "Manguera termoplástica negra (TP74) SAE100R7 conductiva 1/4″ (2,830 psi)",
          "KPH148",
          "MANGUERA",
          "MANGUERAS HIDRÁULICAS"
        ]
      }
    ]
  },
  {
    "id": "silicon-codos",
    "label": "Silicón y codos",
    "summary": "Silicón y codos",
    "image": "/keaton/024-shu-bk.svg",
    "imageAlt": "SHU-BK SCENA",
    "width": 900,
    "height": 320,
    "products": [
      {
        "code": "SHU-BK",
        "name": "SHU-BK",
        "description": "SHU-BK MANGUERA DE SILICON Validación técnica SCENA   SHU-BK MANGUERA DE SILICON Validación técnica SCENA   Cople joroba de silicón color ",
        "image": "/keaton-real/242-shu-bk.png",
        "imageAlt": "SHU-BK SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "SHU-BK",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SHU-BK",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Sin descripción corta detectada.",
          "SHU-BK",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "SHU-BL",
        "name": "SHU-BL",
        "description": "SHU-BL MANGUERA DE SILICON Validación técnica SCENA   SHU-BL MANGUERA DE SILICON Validación técnica SCENA   Cople Joroba de Silicón Azul M",
        "image": "/keaton-real/243-shu-bl.png",
        "imageAlt": "SHU-BL SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "SHU-BL",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SHU-BL",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Sin descripción corta detectada.",
          "SHU-BL",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "SHU-OR",
        "name": "SHU-OR",
        "description": "SHU-OR MANGUERA DE SILICON Validación técnica SCENA   SHU-OR MANGUERA DE SILICON Validación técnica SCENA   Cople joroba de silicón rojo. ",
        "image": "/keaton-real/244-shu-or.png",
        "imageAlt": "SHU-OR SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "SHU-OR",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SHU-OR",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Sin descripción corta detectada.",
          "SHU-OR",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "SR-BK",
        "name": "SR-BK",
        "description": "SR-BK MANGUERA DE SILICON Validación técnica SCENA   SR-BK MANGUERA DE SILICON Validación técnica SCENA   Codo reductor negro Longitud 3″ ",
        "image": "/keaton-real/247-sr-bk.png",
        "imageAlt": "SR-BK SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "SR-BK",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SR-BK",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Sin descripción corta detectada.",
          "SR-BK",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "SR-BL",
        "name": "SR-BL",
        "description": "SR-BL MANGUERA DE SILICON Validación técnica SCENA   SR-BL MANGUERA DE SILICON Validación técnica SCENA    Longitud 3″ Medid",
        "image": "/keaton-real/248-sr-bl.png",
        "imageAlt": "SR-BL SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "SR-BL",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SR-BL",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Sin descripción corta detectada.",
          "SR-BL",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      },
      {
        "code": "SR-OR",
        "name": "SR-OR",
        "description": "SR-OR MANGUERA DE SILICON Validación técnica SCENA   SR-OR MANGUERA DE SILICON Validación técnica SCENA   Codo reductor rojo Longitud 3″ M",
        "image": "/keaton-real/249-sr-or.png",
        "imageAlt": "SR-OR SCENA",
        "width": 900,
        "height": 320,
        "materials": "Ficha técnica disponible bajo validación",
        "pressure": "SR-OR",
        "temperature": "MANGUERA DE SILICON",
        "applications": [
          "SR-OR",
          "Industria",
          "Mantenimiento",
          "Aplicación técnica"
        ],
        "specifications": [
          "Sin descripción corta detectada.",
          "SR-OR",
          "MANGUERA DE SILICON",
          "Validación técnica SCENA",
          "Tags:"
        ]
      }
    ]
  }
] as const

export const CATALOG_PRODUCTS = CATALOG_CATEGORIES.flatMap((category) => category.products)
