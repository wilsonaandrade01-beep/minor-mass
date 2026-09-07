export interface Artwork {
  id: string;
  title: string;
  category: 'AI' | 'Pintura' | 'Fotografía' | 'Escultura' | 'Arte Digital' | 'Ilustración';
  year: number;
  artist: string;
  description: string;
  medium: string;
  dimensions: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
  featured: boolean;
  tags: string[];
}

export const galleryData: Artwork[] = [
  {
    "id": "art-001",
    "title": "Creación IA #1",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/034Pe9UnEznpyYdCPzUr--3--vydzg.jpg",
    "aspectRatio": "portrait",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-002",
    "title": "Creación IA #2",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/0LN7FrsSPX28H0f18gdD--0--r5itw.jpg",
    "aspectRatio": "landscape",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-003",
    "title": "Creación IA #3",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/0loUOpXMpyPGCwvOo9SU--1--cjx6m_2x-clty-upscale-dr6a1.jpg",
    "aspectRatio": "square",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-004",
    "title": "Creación IA #4",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/0MQQztqB1eoLJFE3k5m5--3--bskll.jpg",
    "aspectRatio": "wide",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-005",
    "title": "Creación IA #5",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/0MQsJwv036VmB2S2YE2V--0--8ski4.jpg",
    "aspectRatio": "portrait",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-006",
    "title": "Creación IA #6",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/0SC9DFI5t82hStJQRO2T--0--liakb.jpg",
    "aspectRatio": "landscape",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-007",
    "title": "Creación IA #7",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/18yRonkrF0DAoJAuhMgd--0--ph67y.jpg",
    "aspectRatio": "square",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-008",
    "title": "Creación IA #8",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/1FBz8EFfkMdiUIeISe3k--3--t9hdi.jpg",
    "aspectRatio": "wide",
    "featured": true,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-009",
    "title": "Creación IA #9",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/1iFXr6Jw04NzEwkb6lAU--0--p4guv.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-010",
    "title": "Creación IA #10",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/1KrXcUPZV4Zlql751aSh--0--x9v33.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-011",
    "title": "Creación IA #11",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/1qokRzsmCbjRm58OPc3W--0--w0rfy.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-012",
    "title": "Creación IA #12",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/1WkD4APOyAJOHbWbqXR5--0--8r26b_7.8125x-real-esrgan-x4-plus.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-013",
    "title": "Creación IA #13",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/1xQKnr0ayVJk3pKzBswf--0--0hia6.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-014",
    "title": "Creación IA #14",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/1Z5bcdkepSIpLbX48Tsz--0--fotrl.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-015",
    "title": "Creación IA #15",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/21jOSAF9mnDklVSK78F3--0--hp8tt.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-016",
    "title": "Creación IA #16",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/25DESNNj2T9PfxKMyoNS--0--92gyv.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-017",
    "title": "Creación IA #17",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/29DU2L0TXvc6kaze24Kl--0--o65x6.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-018",
    "title": "Creación IA #18",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2bwr3nc44ir4emRo8Y4d--0--lkufe.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-019",
    "title": "Creación IA #19",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2E6Vh1JYYBTout7myNSF--0--603cf.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-020",
    "title": "Creación IA #20",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2hAYfxBvWFzeBEwNad7v--1--5zcfh.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-021",
    "title": "Creación IA #21",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2j9WOsBUBEw14RIDWd7D--3--tqfo8.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-022",
    "title": "Creación IA #22",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2LuxXqGd4kl6fjtXMIgS--0--n08wf.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-023",
    "title": "Creación IA #23",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2U3Qczvf2paYkDH6v5pH--3--2mjqn.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-024",
    "title": "Creación IA #24",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2umHDnQVg9mLGPMdfv7K--0--lysc5.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-025",
    "title": "Creación IA #25",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2ws7Ojs7uCaFtktaiMaT--2--9q02h.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-026",
    "title": "Creación IA #26",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/2Xdb4dl2AkV07F0XExFL--0--2ivm7.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-027",
    "title": "Creación IA #27",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/36GIOi63lwmwhZeqQSgQ--0--g3a5k.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-028",
    "title": "Creación IA #28",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/3coZQ0Zej7kbDWFCZkA1--0--gjejj.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-029",
    "title": "Creación IA #29",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/3fa4BQ11eXP42uAxv1hk--0--xbmv7.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-030",
    "title": "Creación IA #30",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/3QfitQBg8c846rHuiEWE--2--k2ku2.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-031",
    "title": "Creación IA #31",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/3y0ZUSxqdjuOhwhhoVnt--0--g3l87.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-032",
    "title": "Creación IA #32",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/3Z0e4wxzQBAY46sZnvId--0--jnsvi.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-033",
    "title": "Creación IA #33",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/42hAjjfw0JWL1zexKO8f--1--6ynmw.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-034",
    "title": "Creación IA #34",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4iIqkfoXXcudH0SsuwjV--0--pcyrw.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-035",
    "title": "Creación IA #35",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4K9aRGvvt5xA7Nu3qLrj--0--6w1yy.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-036",
    "title": "Creación IA #36",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4LEl8xfI4JaQAHSKeEwd--3--bpnra.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-037",
    "title": "Creación IA #37",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4M3C5SNWaTIdP3kPRzu8--0--oermd.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-038",
    "title": "Creación IA #38",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4TSeQdkm30dtOtWvx8hY--0--r1zq0.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-039",
    "title": "Creación IA #39",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4VwO1dkl33f3fX7QIFnt--1--6h8kj.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-040",
    "title": "Creación IA #40",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4Wx1gvSVeO2EfeTzxUdw--0--yr4nx.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-041",
    "title": "Creación IA #41",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4YYm7ZSpvcVr9KK7ZvVd--0--bjyht.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-042",
    "title": "Creación IA #42",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/4z13fPO8Q7CeWmRgtGLL--0--6alur.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-043",
    "title": "Creación IA #43",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/585bmjznUs8miIXEwxyK--2--7mz83.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-044",
    "title": "Creación IA #44",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/5EVC2ukNosrWijsnowft--0--hebma.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-045",
    "title": "Creación IA #45",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/5Fz6hCB7cXqNPi9KcIyo--0--ig2sa.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-046",
    "title": "Creación IA #46",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/5qDsqDE4hScXdzhxRSiI--2--xubvj.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-047",
    "title": "Creación IA #47",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/5qjJxcW9HLQPmcn0xEkL--0--iu11s.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-048",
    "title": "Creación IA #48",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/5XA7q4Vl6eVngbMqqotB--2--is8zm.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-049",
    "title": "Creación IA #49",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/5yZOjxnCQWW6gv3hi5SW--1--zyl8p.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-050",
    "title": "Creación IA #50",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/5zSFTvnXHGZ3ZmG6lJuf--0--epbi8.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-051",
    "title": "Creación IA #51",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/67mo1Z7D6l8G9qWhtdz9--0--zckxf.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-052",
    "title": "Creación IA #52",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/69P2w6nmZXM9V4jjeJhI--1--du7gn.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-053",
    "title": "Creación IA #53",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/6atTlwaI6GpypwzviEK9--0--rlcra.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-054",
    "title": "Creación IA #54",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/6duqXJZ4cEzo2wnaI4Nl--0--e2zve.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-055",
    "title": "Creación IA #55",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/6FsVc6Ut1Ubxo30kn4KN--0--duk4r.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-056",
    "title": "Creación IA #56",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/6z2qyk8pDidcWkCorqY1--0--2jal4.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-057",
    "title": "Creación IA #57",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/70RrpjLet7ijWlItRt7W--1--15udq.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-058",
    "title": "Creación IA #58",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/7a6l1ogL8ZeQuUOFFCok--3--n0fu0.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-059",
    "title": "Creación IA #59",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/7Edacw3RQIMgM16U1MqE--0--3ml5l.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-060",
    "title": "Creación IA #60",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/7OBC3BPZVdjpgMdEAAtH--0--0vha1.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-061",
    "title": "Creación IA #61",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/7RW68DfU2qArQwOxCHAY--0--mjj4f.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-062",
    "title": "Creación IA #62",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/7X6hb5Eba8gzkKcIdKCh--0--tp4ec.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-063",
    "title": "Creación IA #63",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/82Ugz50wS1HMWjmTWh16--0--4amba.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-064",
    "title": "Creación IA #64",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/85f5AzalKccasZKXFznT--0--cppum.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-065",
    "title": "Creación IA #65",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/8crQVwTMSuU2Tqp6sRcO--1--0wg4w.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-066",
    "title": "Creación IA #66",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/8DT77aG2yNY229zElrNc--1--d8w27.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-067",
    "title": "Creación IA #67",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/8k6Iycf0x7Hr86MUAHKF--1--8blf9.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-068",
    "title": "Creación IA #68",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/8n1SzpiywuIKQkAIYlRR--0--m77pq.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-069",
    "title": "Creación IA #69",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/92MnODvIX2HgX039z4cK--0--vh4wc.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-070",
    "title": "Creación IA #70",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/95cEMqy4xwfI6mmdlts6--0--1ozl3.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-071",
    "title": "Creación IA #71",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/9F6CeFUV5UZqJqjg7UMs--0--hd055.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-072",
    "title": "Creación IA #72",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/9sdXeFt34XRaTfYHx8MK--0--pzxk4.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-073",
    "title": "Creación IA #73",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/9tA3DLCrfKUkNB8tE4aD--0--6o6s0.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-074",
    "title": "Creación IA #74",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/9VuZ6w5gzVNW8OcGFvek--0--i5kek.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-075",
    "title": "Creación IA #75",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/9WFt4xSPrjMnDQYwutkt--0--3eyf3.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-076",
    "title": "Creación IA #76",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/9YFL6rN5J7nghkWqBVly--1--5q2jc.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-077",
    "title": "Creación IA #77",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/a0TgUmb7E74w2qTQtrlH--0--celwq.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-078",
    "title": "Creación IA #78",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/A6mZ2lJJri3MPul78aD8--2--7lkzl.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-079",
    "title": "Creación IA #79",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/AcJU3WA17QWgppJa8zCf--0--vbds0.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-080",
    "title": "Creación IA #80",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ady6PQgXnVp8fMSOAgeX--2--1ox5h.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-081",
    "title": "Creación IA #81",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/AgBVP2iq7xpVew63gBPJ--2--82m2p.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-082",
    "title": "Creación IA #82",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/aJzMZpUB5Bgl91aKkytR--1--bpjdf.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-083",
    "title": "Creación IA #83",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/AKvIe6qpHPJUzeVQWAQY--0--t8ajd.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-084",
    "title": "Creación IA #84",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/AsRWrriOVQ7ueTWQK24m--0--2tf0i.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-085",
    "title": "Creación IA #85",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/aTyVayak3cbqEAixsdzK--0--tjlhn.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-086",
    "title": "Creación IA #86",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Av8aW6DZ6qUb8RFmlTnj--0--x6b4g.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-087",
    "title": "Creación IA #87",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/aZDzxc75XpZ0sJwT8ebV--0--bnjbg.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-088",
    "title": "Creación IA #88",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/B0DELIxN8Zeec29RTwJx--0--e9r9u.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-089",
    "title": "Creación IA #89",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/b2th76csT4bQHDio3ODq--0--9k16k_7.8125x-real-esrgan-x4-plus.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-090",
    "title": "Creación IA #90",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/B4VAnzub8FFCrCOuagv3--0--ebuoq.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-091",
    "title": "Creación IA #91",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/BAETmZV4dVgcOAv8w80H--2--82eg2.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-092",
    "title": "Creación IA #92",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/BbXrGpJiS0ZiJlc2LA4i--3--onf7k.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-093",
    "title": "Creación IA #93",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/bDXzeQMhd0IVeMOWYwyl--0--1drbh.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-094",
    "title": "Creación IA #94",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/bg9JwnOISNldzaHLhAbB--0--30lqp.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-095",
    "title": "Creación IA #95",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/BHD5tHQtPc2KkOrPGKFJ--0--w8z10.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-096",
    "title": "Creación IA #96",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/BiqdvzGGiM7vcmitdCN1--0--49ddq.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-097",
    "title": "Creación IA #97",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/BMAvLAYvIwL0Ue6hSgNx--0--nmuer.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-098",
    "title": "Creación IA #98",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/bnlqrp4vPCcmk09jp83z--0--vhxct.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-099",
    "title": "Creación IA #99",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/c31ujSgdN91bflVYXYgN--3--otpu7.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-100",
    "title": "Creación IA #100",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/c4qaoKmEKQJzda9n0u5d--0--983s8.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-101",
    "title": "Creación IA #101",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/C9XAiYuQXQg0EvHtiPKS--0--u3u0b.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-102",
    "title": "Creación IA #102",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cB93i2jcimI21jLi8YYH--0--7akx5.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-103",
    "title": "Creación IA #103",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/CbhkgAhjkBthRmpxhJfs--0--3vc92.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-104",
    "title": "Creación IA #104",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cCYd0ISg9GDzL4XRZNGG--0--ingf3.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-105",
    "title": "Creación IA #105",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cD2puk13CT2JqOfSKq68--2--ws6iu.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-106",
    "title": "Creación IA #106",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cdGQ2W6La7IKMT9rcXrI--0--xkl9u.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-107",
    "title": "Creación IA #107",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cI2iDkNTbenDEytyGQ4I--2--74k49.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-108",
    "title": "Creación IA #108",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ciNeychptTfNsKAjIFzK--0--cqgo1.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-109",
    "title": "Creación IA #109",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/CIOjDJGKfpNoyiN8TVn8--0--hf7je.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-110",
    "title": "Creación IA #110",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ckFeLkUeNLUIJCc4TivD--0--6nn11.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-111",
    "title": "Creación IA #111",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/CLpN3ojFPCFxQWIMyTSD--0--ysakw.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-112",
    "title": "Creación IA #112",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cqGV9Xvmu4qS5avhnM8m--0--g8tlr.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-113",
    "title": "Creación IA #113",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cSygdbaltsoJTg6F6BD1--0--hvuok.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-114",
    "title": "Creación IA #114",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Cu6ulcdF3lDPcr7aX9pg--0--w5a8j.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-115",
    "title": "Creación IA #115",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/CUNQl3OBQPeZyqKfkRdT--0--uym6u.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-116",
    "title": "Creación IA #116",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cV7Xtjm5o98oKfGcEkMm--3--2q00k.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-117",
    "title": "Creación IA #117",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cvaVsVUPcryxhh9UaFz6--0--k3473.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-118",
    "title": "Creación IA #118",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/cw5MBkwDxEEsrguunF8X--0--vkdn2.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-119",
    "title": "Creación IA #119",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/d11SwzMpgmoABECUnwOP--0--exe8n.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-120",
    "title": "Creación IA #120",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/D1DtIt7ZnJ2Q0vLQyCHH--1--mwkgr.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-121",
    "title": "Creación IA #121",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/D4wRrPjIKKMZ7JieMUpj--0--f7p9o.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-122",
    "title": "Creación IA #122",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/daVBGfqEctEFwlpmlKuq--0--wqy6a.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-123",
    "title": "Creación IA #123",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DbhYHb6pxTKqmFP8AhjI--0--l2zyt.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-124",
    "title": "Creación IA #124",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/dgeq202p8N0AYCorEBfc--3--wlvxw.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-125",
    "title": "Creación IA #125",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DGYUKYetCDG28pSxS5rc--0--0khof.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-126",
    "title": "Creación IA #126",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DH1ZgMt05lOsSluyEwoT--0--p02vm.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-127",
    "title": "Creación IA #127",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/dHGGFslOq4yPoAoMmrls--0--x0shj.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-128",
    "title": "Creación IA #128",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/dHHrNIa4DzdVbZXakIFz--0--ass3i.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-129",
    "title": "Creación IA #129",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DHsYE9ecUDrz6stYC4TV--0--10neb.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-130",
    "title": "Creación IA #130",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DmCNwAvc7xUF3lBKSpn1--0--76kuy.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-131",
    "title": "Creación IA #131",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DNEaJYbiPYB8ULNM8eHa--0--mymos.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-132",
    "title": "Creación IA #132",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DnKtnU8baRJlNL1ggcnW--0--nu4wc.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-133",
    "title": "Creación IA #133",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Dp6D8SmYKAg70HpCwGBx--2--0ebpp.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-134",
    "title": "Creación IA #134",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/drUizZY7vDZZ3UAGwPkJ--3--bjhst.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-135",
    "title": "Creación IA #135",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/du06vFrVLMrybZ5Th0lS--0--8lepu.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-136",
    "title": "Creación IA #136",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/DVBfjv9paZLHX8Ng1TD2--3--gcfn5.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-137",
    "title": "Creación IA #137",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/dy5lVyzhLs2Su2XEdkdF--0--f1s4h.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-138",
    "title": "Creación IA #138",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/E8OwZlmQMLq7bQ1giZJ3--0--55ryy.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-139",
    "title": "Creación IA #139",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/EAcDwHniKMTOrpBy9JHc--0--bmfkw.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-140",
    "title": "Creación IA #140",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/edpP0NcMnaI676SHibxA--0--75661.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-141",
    "title": "Creación IA #141",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/efadIZmUxdiE3tSIQR4y--2--c2ix6.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-142",
    "title": "Creación IA #142",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/EguXzDigXFkLdQtCfPAR--0--90pug.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-143",
    "title": "Creación IA #143",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ehAAMxJFSKU96VWzQxyf--0--u4nlu.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-144",
    "title": "Creación IA #144",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/eJzAR8MkqdTeyFGnnKmx--1--yq13k.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-145",
    "title": "Creación IA #145",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Elgytf8f0GXgMo99zOzx--3--j5rsq.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-146",
    "title": "Creación IA #146",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/EQdW4TEcIglBpW2W2GO0--1--yxryv.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-147",
    "title": "Creación IA #147",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/eTxMiznopTDtwcBohNRv--1--bzgnx.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-148",
    "title": "Creación IA #148",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/EuSFIvhIqvEqPBUYfkBU--0--50g29.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-149",
    "title": "Creación IA #149",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/EZOKtq7aOeYWCfmduKC4--1--6xndm_2x-clty-upscale-6mris.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-150",
    "title": "Creación IA #150",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/f1V1pgWaGBSF1txNeVqw--0--agv2d.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-151",
    "title": "Creación IA #151",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/F3lGDQ3SrFMFEVNqeDUH--0--229x1.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-152",
    "title": "Creación IA #152",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/F43hC2yA5HiA2tFQ7bhe--2--3u8ze.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-153",
    "title": "Creación IA #153",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/f9gr0iaavPYMK6oYcXrV--0--23sl3.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-154",
    "title": "Creación IA #154",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/FE6fNaXUSrRnkdBVEuik--0--2awue.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-155",
    "title": "Creación IA #155",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/FFLUbktkEvF9XNNQGeGf--1--16isx.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-156",
    "title": "Creación IA #156",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Fgg0VrvY2cKESRmx50um--0--dw7fo.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-157",
    "title": "Creación IA #157",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/FGjlmvmwErHuyXroSY0W--0--fcgba.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-158",
    "title": "Creación IA #158",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/fhva4yAFjZDCFzZjzFpV--0--tn0jv.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-159",
    "title": "Creación IA #159",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/FiLqqfo9MciHFa5NcSi4--0--zn0z2.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-160",
    "title": "Creación IA #160",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/fItDXeHxiJ0dxvEeHIZG--0--mewgy.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-161",
    "title": "Creación IA #161",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/fJR3FCEJKVDHZWDikDiZ--0--pbz2r.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-162",
    "title": "Creación IA #162",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/flrzaWkO4Awp30mzL7l5--0--1nsv1.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-163",
    "title": "Creación IA #163",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/FPsntutatGfuNj5WOsp0--0--kgeld.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-164",
    "title": "Creación IA #164",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/FV3hwFhzGRsVAv7l8fDG--1--ar453.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-165",
    "title": "Creación IA #165",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/FY5znIaG1T4oWFAtPtte--0--1mo58.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-166",
    "title": "Creación IA #166",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/fzeMUXapfqyRurm3sKiq--1--lv8dq.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-167",
    "title": "Creación IA #167",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/G4Q9v8lXSp6QXGnaMCgH--0--g2q1o.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-168",
    "title": "Creación IA #168",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/GBZghjxbad41hHL0ZWpz--0--nav04.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-169",
    "title": "Creación IA #169",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gcRUUKGRTB9QO4NibyCY--1--md28b.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-170",
    "title": "Creación IA #170",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/GFeisJEezAvMMRaC5o2g--2--uizu6.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-171",
    "title": "Creación IA #171",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/GJ1TjHwUns7OlTvy7Gl7--0--yr8e0.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-172",
    "title": "Creación IA #172",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gK7YOONzh9qukDsEgRLP--0--bi8yi.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-173",
    "title": "Creación IA #173",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/GkuIzcqRNxLR1qCPBBy9--3--notvn.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-174",
    "title": "Creación IA #174",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gpjzYIRuzmXZcDirofIA--0--ogdec.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-175",
    "title": "Creación IA #175",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gpSdgKty18q7LQ5afTMo--2--jc708.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-176",
    "title": "Creación IA #176",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gqb19RozSSGrPzPvWyG7--3--9y77y.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-177",
    "title": "Creación IA #177",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gqb6hKleFQsqms0II82f--2--cjmhw.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-178",
    "title": "Creación IA #178",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gsaq587qS76FUCN12HUS--1--w1da2.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-179",
    "title": "Creación IA #179",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/GTUcicX99pw7t6uimozl--0--fpiys.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-180",
    "title": "Creación IA #180",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/GUQr0HheUHdcdIM32y7A--0--8rpni.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-181",
    "title": "Creación IA #181",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/gxEjFtZYUF2YG540sr3A--0--nswbc.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-182",
    "title": "Creación IA #182",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/HCUJozMUWpqLmUZAueFG--0--9g0ul.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-183",
    "title": "Creación IA #183",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/hFfHXzSEdc808Ff3RM1Q--0--gvpcy.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-184",
    "title": "Creación IA #184",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/hJnRxyjXQL5mIkt3EiJG--0--osvj0.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-185",
    "title": "Creación IA #185",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/hk9Dc4lMgXPIsRzwquZk--0--9rdkf_2x-clty-upscale-7q7gj.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-186",
    "title": "Creación IA #186",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/HOdVBfxit0UqXS9Dtk5G--0--hdz1m.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-187",
    "title": "Creación IA #187",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/hpuSs4Q5OSYlBSOTlc4W--0--xjlsw.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-188",
    "title": "Creación IA #188",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/HrhmZn9u8dyBimZUwPDI--0--hz2s2.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-189",
    "title": "Creación IA #189",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/HsIv6VA7YyJFdYsYyer4--0--luv0s.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-190",
    "title": "Creación IA #190",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/hxLya2ZUc1c5eEO2ocxD--0--h9lvi.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-191",
    "title": "Creación IA #191",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/i3elLbUaAp7hDvkKUMUn--0--wpu6j.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-192",
    "title": "Creación IA #192",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/i4eQCrhsxgbRRbr5Gjve--3--rp76o.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-193",
    "title": "Creación IA #193",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/I4xVVVMl2Fpsl11IxNo5--0--dc6q5.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-194",
    "title": "Creación IA #194",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/iAIEQRTIL54IUsrsag48--0--hgqjl.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-195",
    "title": "Creación IA #195",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/iAtQK2D2fg6i48hrmxId--1--nkrt1.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-196",
    "title": "Creación IA #196",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ibM8hCnvA2yeFbeVilRd--0--cfqrk.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-197",
    "title": "Creación IA #197",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ICv4WxX2PL3JM7wV2fp0--0--krl4u.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-198",
    "title": "Creación IA #198",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/IG6XGzlae8JwJXerziik--0--20wit.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-199",
    "title": "Creación IA #199",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/IKfq9xpQjijP1mVwKyAc--0--gp35k.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-200",
    "title": "Creación IA #200",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/iNE4LidRQdnCEvsbOO0Z--0--obq2w.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-201",
    "title": "Creación IA #201",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/INy1Xm500SSR94WCr0By--0--bcvk9.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-202",
    "title": "Creación IA #202",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Iq82JhYuebD9FxfZLCnO--3--4lazu.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-203",
    "title": "Creación IA #203",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ityh8452mGzeQj8UUy5V--0--w2p1r.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-204",
    "title": "Creación IA #204",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/IU2vjgkNSrkvVNWJok0n--0--meqp7.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-205",
    "title": "Creación IA #205",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/IWFcqcvouNLLc0ju3awe--1--n5s2y.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-206",
    "title": "Creación IA #206",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/IyCBA18RqWt2lRLRH7ZW--0--flm9z.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-207",
    "title": "Creación IA #207",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Iz1zR8GZcr86SL91BI3r--0--qwgh2.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-208",
    "title": "Creación IA #208",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/J53I14F3PnxWlqY0dNZU--3--bczxu.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-209",
    "title": "Creación IA #209",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/j9ErUMOYr3CsCEaUaKbM--0--e5ja5.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-210",
    "title": "Creación IA #210",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/jdnd0uEVgzZjFG5yhi0F--0--3x3ne_2x-real-esrgan-x4-plus.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-211",
    "title": "Creación IA #211",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/jDYh3AEbzaFdkvq7c8uh--0--qp2t9.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-212",
    "title": "Creación IA #212",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Jiux289gXtdoiwiQ15Gf--0--58l8s.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-213",
    "title": "Creación IA #213",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/jONTqJ3HcQBdVfuq7vs6--0--dkqfo.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-214",
    "title": "Creación IA #214",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/jQx1ahrmmeDlj43oS7IM--0--91r67.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-215",
    "title": "Creación IA #215",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/jsXLvyEyFvW1W0tZoZhg--3--fn8rr.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-216",
    "title": "Creación IA #216",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/JVIKomcYISoLFPV3fsDh--3--odul9.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-217",
    "title": "Creación IA #217",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/JyMdapnHo3bWdzOPALEp--3--a6vaa.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-218",
    "title": "Creación IA #218",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/jZ7gSPyTSKSmvaqw67dZ--0--jz4sm.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-219",
    "title": "Creación IA #219",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kC81QC59s5J19gflRa7J--0--ee88j.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-220",
    "title": "Creación IA #220",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kCuXz6im1qa6jhe9rKjz--2--fjf8s.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-221",
    "title": "Creación IA #221",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/KhUpfNfJcTOTQPI0FqkP--0--ysywx.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-222",
    "title": "Creación IA #222",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/KiqTZesHp0Obx3FuAxjh--0--122nt.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-223",
    "title": "Creación IA #223",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kJlmidInELqSkcLkq6tW--0--0fxrb.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-224",
    "title": "Creación IA #224",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/KmXezKdF6LcWftdd8wUK--0--g55n1.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-225",
    "title": "Creación IA #225",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/KnIra4i1Zonq06ldm3SB--2--844p0.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-226",
    "title": "Creación IA #226",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kO2O1wYpv2wsUQnObkX0--1--08qkl.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-227",
    "title": "Creación IA #227",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Ko8c9ZTXq5ohexaHdt7s--0--csok0.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-228",
    "title": "Creación IA #228",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kP1YoLodkTQ8yUPvtAjd--0--bgpzg.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-229",
    "title": "Creación IA #229",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kQzYcXo42feVXVDsG5oi--3--pp7d8.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-230",
    "title": "Creación IA #230",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kUneUkFv20OzL46cPMqx--2--l8zta.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-231",
    "title": "Creación IA #231",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/kvZLnKDRnMjbExxqkM4S--0--wb3jo.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-232",
    "title": "Creación IA #232",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/KyxuZpgcvXBR2oz4YKg8--1--ja2th.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-233",
    "title": "Creación IA #233",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lBB0xOfrp3vfnA6Pwxru--0--eyw9k.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-234",
    "title": "Creación IA #234",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lDvZ6xqPUljakhSlbjSx--0--jc6km.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-235",
    "title": "Creación IA #235",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/LEGdSJXEsa2FXqqGm6Ze--0--wu08m.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-236",
    "title": "Creación IA #236",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lg4kkeN9Atb0USnz0PIe--3--1nknz.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-237",
    "title": "Creación IA #237",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Ln6V1nYidVSY3kjpmoEZ--0--mf6o2.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-238",
    "title": "Creación IA #238",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lQnc6vZSjdB01hEpFoyY--0--aww3m.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-239",
    "title": "Creación IA #239",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lsqR6qhWtQTkP244pDot--0--mpk9v.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-240",
    "title": "Creación IA #240",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/LtblM3mjXZIdiAY2n6T3--0--8ig2d.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-241",
    "title": "Creación IA #241",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lUJb1Y8VFMF0MaXTjhD4--0--jfmvi.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-242",
    "title": "Creación IA #242",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/luwCaXN2VZJcEA2panzC--0--msslw.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-243",
    "title": "Creación IA #243",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lXRElpueNvSpzgOi07ZN--0--2udr8.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-244",
    "title": "Creación IA #244",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/lyAJBTsSRaJVR4jfcxLh--0--ronaq.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-245",
    "title": "Creación IA #245",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/M6dYlIIJLeXJPNwkH9b7--0--58n73.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-246",
    "title": "Creación IA #246",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/M7WF1xlKI11Fe8nPF4bm--1--xd5o5.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-247",
    "title": "Creación IA #247",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/m8GVkbMOHSrrzMzhF9H1--0--muk0m.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-248",
    "title": "Creación IA #248",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/M9bX9QAf6lfELfD2pahg--0--xb33j.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-249",
    "title": "Creación IA #249",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/McKbr1JUt1qssbdXcy4I--0--md3in.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-250",
    "title": "Creación IA #250",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/MgCHlgp0gnXZHLMts5Fx--1--drk8q.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-251",
    "title": "Creación IA #251",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Mhb6AyUoERxvHSi1LAg3--3--uyweg.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-252",
    "title": "Creación IA #252",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/mHSYDEzXYbku8U4N5dmc--0--afwq7.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-253",
    "title": "Creación IA #253",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/mjcDRgdcTHVZYPruWrWU--1--4kfpa.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-254",
    "title": "Creación IA #254",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/MjH5VDxttlFYkHnjtyUk--2--j8tjt.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-255",
    "title": "Creación IA #255",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/mjNSGfwVUQYVavM0kaRe--0--bx0sr.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-256",
    "title": "Creación IA #256",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/mNSXWipuDuC4iK1C7rZE--0--ifujc.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-257",
    "title": "Creación IA #257",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/mq5fsu57zJefbF4clDj1--1--t8ouv.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-258",
    "title": "Creación IA #258",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/MrK5eQx4O3GpAitKpOMV--0--9va5d.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-259",
    "title": "Creación IA #259",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/MsBhwnPapY9OmjZ3Ewgw--0--aj7o3.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-260",
    "title": "Creación IA #260",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/msn6PpnmUfLYweLGvh03--0--4isdw.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-261",
    "title": "Creación IA #261",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/mUEoer7oz9puAtcsGUF1--0--12ok4.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-262",
    "title": "Creación IA #262",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/MXcIdOgdwwItTwf91ZQB--2--2h8y5.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-263",
    "title": "Creación IA #263",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/mZox4XVOPLYayTENR3bV--3--xu8i0.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-264",
    "title": "Creación IA #264",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/N9ry75RGyzQEN5IsM5K0--0--cl8ev.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-265",
    "title": "Creación IA #265",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NcB7rfu56mC7X3ffiTPZ--0--xr7ur.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-266",
    "title": "Creación IA #266",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/nEJWlq8CDzDfZju9UJAF--3--9ehpd.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-267",
    "title": "Creación IA #267",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NFKBx1paauPkqLwV2OuK--0--m897u.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-268",
    "title": "Creación IA #268",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NHfaAxOLjk865sc2IcUy--2--jkhtd.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-269",
    "title": "Creación IA #269",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NHSuaymKxIcpOMNqLcD1--0--roko6.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-270",
    "title": "Creación IA #270",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/nM3HsdKy7byLP7O00TVf--0--6o42w.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-271",
    "title": "Creación IA #271",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NpuTVNVPNuBPIhqd6dFU--0--rrppx.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-272",
    "title": "Creación IA #272",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NQCTlRhwlJqX3Yt2pppT--2--evvrn.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-273",
    "title": "Creación IA #273",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NrNkBPeyzXznjMlxlfpY--0--g9zir.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-274",
    "title": "Creación IA #274",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/NtqShZIz2V0qgts7uRzu--0--8z50s.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-275",
    "title": "Creación IA #275",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/nuWCIRkTkmpWRjJE2fLG--0--wjw30.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-276",
    "title": "Creación IA #276",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/nVcrz1VYqaWHT3HyFJ27--0--8nfwc.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-277",
    "title": "Creación IA #277",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/o0CdVtQjCO0Rm8IoIcry--0--6nsa5.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-278",
    "title": "Creación IA #278",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/o2NTBgkSe93tVthzDq6p--1--mol43.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-279",
    "title": "Creación IA #279",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/O2ZzNgXWU3UGWmnKu45Q--0--mo2sl.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-280",
    "title": "Creación IA #280",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Oao1HbSa8MtuCo4bbNlU--0--mxvql.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-281",
    "title": "Creación IA #281",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/OpYri8G2miThrUmoaOG4--0--m697h.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-282",
    "title": "Creación IA #282",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/oQv2g1TJdlaFDM28t9an--0--5sn7j.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-283",
    "title": "Creación IA #283",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/orEGnzfYzivkZoFfM5My--1--tbfyt.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-284",
    "title": "Creación IA #284",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Oxcn8wl2hz34ZJQXxIJY--0--ryoyl.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-285",
    "title": "Creación IA #285",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/oZ6G0YCAzE07bw5tSxP5--0--2i52c.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-286",
    "title": "Creación IA #286",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/P9fD3hlXWHUtiRoZGDEF--3--6wkgk.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-287",
    "title": "Creación IA #287",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/PectVwkvfCgIeyKooZ6L--1--u86h1.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-288",
    "title": "Creación IA #288",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Phdh7wimcGCpD7mQm1kL--0--umgsh.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-289",
    "title": "Creación IA #289",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/pLxwuqLuDHAEn0UbVLto--0--w4lz2.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-290",
    "title": "Creación IA #290",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/POFqDsHfvvSvy2I0BO4M--0--c5fn8.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-291",
    "title": "Creación IA #291",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/pQI9KFp1gWWBdaUIkzcU--0--64aba.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-292",
    "title": "Creación IA #292",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/pqlEcnjTFid5Eg7FL02W--0--qlrqm.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-293",
    "title": "Creación IA #293",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/priCYdGImuSfWSPu8QB4--0--d3foz.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-294",
    "title": "Creación IA #294",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Px3PNUFJp1iI2uFoDHo7--0--jp7xv.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-295",
    "title": "Creación IA #295",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/q6Spr4pIWLdZmVmFYhtP--0--9xmav.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-296",
    "title": "Creación IA #296",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QesZsulFcJuJo6Ttx0UC--0--6856c.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-297",
    "title": "Creación IA #297",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/qevFuiRT9lvmTV18hRAt--0--pic3h.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-298",
    "title": "Creación IA #298",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QhwDX9D33CoTRPd0c5Z2--0--1jlnb.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-299",
    "title": "Creación IA #299",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QiWbqru9ZUTba2Lxea6K--3--zf1as.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-300",
    "title": "Creación IA #300",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/qkw7aE7S7OBMqrvhw14n--0--kiwgq.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-301",
    "title": "Creación IA #301",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QN9BALhtJH8rh6su1dVN--0--cqoqb.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-302",
    "title": "Creación IA #302",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QnekqurUC8F73IBFb3q6--3--h63m6.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-303",
    "title": "Creación IA #303",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/qOFucvNXeM1na9vclLGo--3--8syoc.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-304",
    "title": "Creación IA #304",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QpKoPTiqggfCawL4A4FV--0--cwop8.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-305",
    "title": "Creación IA #305",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QQeBaRzcgJNHAX9Zlwqf--0--4ww2d.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-306",
    "title": "Creación IA #306",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/qshjt42OsXllZsxT3RTW--1--rayae.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-307",
    "title": "Creación IA #307",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/qsyu4TjgGygjS9TmsaG3--0--hvqa9.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-308",
    "title": "Creación IA #308",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/QxpXtANp3c2e1e8qxvFj--3--0u1gp.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-309",
    "title": "Creación IA #309",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/r4oCNDDVjXHHhL3xATQy--0--1wnuy.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-310",
    "title": "Creación IA #310",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/r5HMll6OVQFS88TeBmCk--0--q0hbj.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-311",
    "title": "Creación IA #311",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/r69D96SKEl00zmuUNWMa--0--cflbs.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-312",
    "title": "Creación IA #312",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/r7MpMc3FcEpoS5gMs1QB--0--8ncly.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-313",
    "title": "Creación IA #313",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rBHdpOg4pWdrROXFRbnU--0--h74uz.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-314",
    "title": "Creación IA #314",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rcGWbCmaL1gSkaUTI6bH--0--7apaj.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-315",
    "title": "Creación IA #315",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Re8KQIIyPJ4U1dsUi3Wq--0--lrtgc.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-316",
    "title": "Creación IA #316",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/RIUFBZbpF86aS0lnGWVu--0--1f0ou.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-317",
    "title": "Creación IA #317",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/RkNixQ05xbWfYzJxyodO--0--iewss.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-318",
    "title": "Creación IA #318",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rKVuCa9mOVhGqC4ad0wt--0--c4d1a.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-319",
    "title": "Creación IA #319",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/RMpRuHcWxNXILWqQraRI--0--8qap3.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-320",
    "title": "Creación IA #320",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/RPjQlaD7yqNT3teQhAGt--2--fsic6.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-321",
    "title": "Creación IA #321",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rTMtik7zJj4gT9dcrPp9--0--0zbm6.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-322",
    "title": "Creación IA #322",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rX7Op0rI2bKpiy9I2hOD--0--1jftp.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-323",
    "title": "Creación IA #323",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rXH7gMkmEaHHVAJuwQyL--2--p5cio.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-324",
    "title": "Creación IA #324",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rXnsPw0b6qIMUumG0R3P--0--fm25s.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-325",
    "title": "Creación IA #325",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/rYFOP4GqFuhw1d9edpTU--0--tw7ht.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-326",
    "title": "Creación IA #326",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/RyiXaEz1Ta52XHyttvXu--0--fsd8u.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-327",
    "title": "Creación IA #327",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/S5pkgPuE1iTR8WlsY3lc--0--zzm2b.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-328",
    "title": "Creación IA #328",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/SEZOiqoRmJBiUX0ZJhdM--0--1xfk0.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-329",
    "title": "Creación IA #329",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/SFdCMPyblfqPsuWkBrwI--2--3q35c.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-330",
    "title": "Creación IA #330",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/sfxWjzmwFuK3ksDpnufJ--2--kua15.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-331",
    "title": "Creación IA #331",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/sGTJqVX1yeRqaidJsXLs--0--b70xt.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-332",
    "title": "Creación IA #332",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/slQ4ySyATBYZGvo1InZP--3--8mnyx.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-333",
    "title": "Creación IA #333",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/smiZeYcAxbg5rnR9ezIS--1--z0vd4.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-334",
    "title": "Creación IA #334",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/sOqFw48zwkOwppKLulV2--0--qqr6k.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-335",
    "title": "Creación IA #335",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/SOuqmfzYmm9A4oCkwZcb--0--jkyp6.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-336",
    "title": "Creación IA #336",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/sPBFIoexoWT1PsmfDQtu--0--ig01a.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-337",
    "title": "Creación IA #337",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/sRmLgNW7H3liORuW7DoU--0--fwwh6.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-338",
    "title": "Creación IA #338",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/svWGJBPWn0r4iaOW2FW5--0--ae8od.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-339",
    "title": "Creación IA #339",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/sXiGYtUytYcntkFIj3hu--1--gu1ip.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-340",
    "title": "Creación IA #340",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/SyLoqBrAt20WGi52fT5p--1--c6cje.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-341",
    "title": "Creación IA #341",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/sYmUbGbai1JJCFT4e1Wg--0--uibxl.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-342",
    "title": "Creación IA #342",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/t8qqnZpj6EXEivgee7ML--0--h48k6.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-343",
    "title": "Creación IA #343",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/tAa29Yf54CQDXYhwfOKd--0--f3aa7.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-344",
    "title": "Creación IA #344",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Tbsf9ZEUKEfZaZb0MW7C--0--okzvy.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-345",
    "title": "Creación IA #345",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/TEFo3SgTXpOf5ne3LMEr--0--937eq.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-346",
    "title": "Creación IA #346",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/thaLqTRD1LpmdCylSotF--0--iov73.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-347",
    "title": "Creación IA #347",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/TkrPtTxGQoe20vM4sAt3--0--sfttj.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-348",
    "title": "Creación IA #348",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/TLSCC7YbMONXfOlIK0Bx--0--ijcku.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-349",
    "title": "Creación IA #349",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/TMmRDuQX7jQXrciImw1S--0--0njv8.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-350",
    "title": "Creación IA #350",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/TMwCYTdAcuO2LcIPcDF9--0--urycv.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-351",
    "title": "Creación IA #351",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/tPyGQgyN6tlQCjPEE73A--0--r4kjv.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-352",
    "title": "Creación IA #352",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/TS70lRLyWDeyaKlp64XD--0--sti17.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-353",
    "title": "Creación IA #353",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Tse9YUBhhWmMfciXUUzg--0--rmc5t.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-354",
    "title": "Creación IA #354",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/TSRz90NSMDVA9EkWKg2c--0--kdynj.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-355",
    "title": "Creación IA #355",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/tTrRC26ej50kc9j0ODV1--0--kd93a.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-356",
    "title": "Creación IA #356",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/U0RbAdBqEB28GAmIgDT6--0--x5tea.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-357",
    "title": "Creación IA #357",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/U1yZSJYTvJdsNKQSqeiv--0--qi2gk.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-358",
    "title": "Creación IA #358",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Ub1lCEtS4huhLq7rQi03--0--7rwb9.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-359",
    "title": "Creación IA #359",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/UBhNGV7l7B761xnNHnva--0--4ljif.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-360",
    "title": "Creación IA #360",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/uDy4JmSPRWkOswltCabt--0--6h0gr.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-361",
    "title": "Creación IA #361",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/uEUg4Y5zMqLjct12v6C2--0--0lgkj.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-362",
    "title": "Creación IA #362",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ueY4q9V9n1c7LRf6IRU4--0--zbsmr.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-363",
    "title": "Creación IA #363",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/UHiNbWDmNY1db9doSZ4A--0--59u2p.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-364",
    "title": "Creación IA #364",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ujOcCn5mIw3zMHo21iHl--0--ek762.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-365",
    "title": "Creación IA #365",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/uKNINU9QoFJPEUNNA0Oc--0--rwpqc.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-366",
    "title": "Creación IA #366",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/uLlu6PE7tkGe9juRy2OW--0--n7g09.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-367",
    "title": "Creación IA #367",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/um7fBuxz2XBqX0fqGVD7--1--epr6b.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-368",
    "title": "Creación IA #368",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/UMBUs8JrEAkDIn3yQR1n--0--ga749.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-369",
    "title": "Creación IA #369",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/UMt5BttaTodLlj9oBsmt--0--wpk67_2x-clty-upscale-3ylih.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-370",
    "title": "Creación IA #370",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/un2jLE5nQmShjyaKJYiA--0--8dwbj.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-371",
    "title": "Creación IA #371",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/uq5KaLZIeMXYrrJc0Oqc--0--7rxwj.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-372",
    "title": "Creación IA #372",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/UstrnwHFJaSAwdnRzE1e--0--35eia.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-373",
    "title": "Creación IA #373",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/UTfYPDWz3NgWPATm5dSQ--0--zu2mt_2x-clty-upscale-3qt36.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-374",
    "title": "Creación IA #374",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/uyuCyRAaI2O7k3rqpc80--0--a6tt8.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-375",
    "title": "Creación IA #375",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/v0oNJhxAVQ2OmtXcZs7B--0--3sgvq.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-376",
    "title": "Creación IA #376",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/V14LI9TziF7V8anChPOP--0--w3zyp.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-377",
    "title": "Creación IA #377",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/v6e9bvraiatW7jFyYYOl--0--03411.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-378",
    "title": "Creación IA #378",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/V7Wnmk7d2a0c1pyAZemw--0--fwytu.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-379",
    "title": "Creación IA #379",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VAxtqeJK8Fg8Ry3w6CJt--0--fxr8x.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-380",
    "title": "Creación IA #380",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VbmdLnwAo65oRpS2WjOY--1--k6bjl.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-381",
    "title": "Creación IA #381",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VbzollSAvs2MuL0XpY9p--0--49uhv_2x-real-esrgan-x4-plus.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-382",
    "title": "Creación IA #382",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/vD1pAYBVSB5X0Rlyfo4f--1--hqr0v.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-383",
    "title": "Creación IA #383",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VhfOHltIkke8mTINOK4a--0--c9jid.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-384",
    "title": "Creación IA #384",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VI3YdEF2q6D4cAxk9nI4--0--3sd6l.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-385",
    "title": "Creación IA #385",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VlYnKR7yOVokFR88k5ZB--0--153na.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-386",
    "title": "Creación IA #386",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/vnRU1RQCmZhKjDAM0mg3--0--vc3e4.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-387",
    "title": "Creación IA #387",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VpsKz4HaKwYpHgqXRJGv--0--hii9e.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-388",
    "title": "Creación IA #388",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/vpxW6ZMCW3079HU4YJZW--0--ejodt.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-389",
    "title": "Creación IA #389",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/vrMhJxCjSYdMt8cnWhol--0--pfuxt.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-390",
    "title": "Creación IA #390",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VtwaXmiKWb6vrLmTLLCY--0--oompv.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-391",
    "title": "Creación IA #391",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/VvhxIkb07CCq86xAUAC4--0--pbwr0.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-392",
    "title": "Creación IA #392",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/w1VHvUuYIBTm8pW0qFVP--0--yv1yf.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-393",
    "title": "Creación IA #393",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/w2QnKDc4X37Lp6oVqWzI--0--i5uwh.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-394",
    "title": "Creación IA #394",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/w8BPBrYyD4RLsyx6Smdx--0--85yy9.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-395",
    "title": "Creación IA #395",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/WBrOp558gIOXpbKHYsFO--3--gz61k.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-396",
    "title": "Creación IA #396",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/WDZZbrRG0bVcjGVYtZ7f--0--wsfsy.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-397",
    "title": "Creación IA #397",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/WE3DSMzVJh5cY8TvnPBa--0--2v753.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-398",
    "title": "Creación IA #398",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/WGL3VpJtf47V07Z1LZlJ--2--cjcin.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-399",
    "title": "Creación IA #399",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Wo2SmLtuRV5YAExnwvvz--0--0ec2j.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-400",
    "title": "Creación IA #400",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Wq2K14KwfNCz0AsULy1m--2--vt7fb.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-401",
    "title": "Creación IA #401",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/wyiCc7E0oo9FzFbL7cK7--0--qw3al.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-402",
    "title": "Creación IA #402",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/x09wqB3WVareXQfKLRrF--0--szcqh.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-403",
    "title": "Creación IA #403",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/X2IO6QgomQ8rvPZUDrDe--0--w6d8i.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-404",
    "title": "Creación IA #404",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/X5onAsz4DxB1KeIKABaS--0--lkgp9.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-405",
    "title": "Creación IA #405",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/x761EtX17z75s5YM8Tqg--0--44bub.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-406",
    "title": "Creación IA #406",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/X8dhsA7o0yglIUaAGM8M--0--a6f6e.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-407",
    "title": "Creación IA #407",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/xGL2Ah2LckMNxWAYP5Si--0--eybhj.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-408",
    "title": "Creación IA #408",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/xI5PKoUmiHbZlIDbyUlN--0--5s5xe.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-409",
    "title": "Creación IA #409",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/xkV9GUU3t2uP3Zzofdb2--0--p85q7.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-410",
    "title": "Creación IA #410",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/XqJIvPh3TVhO21OoPLro--1--jsk2o.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-411",
    "title": "Creación IA #411",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/xTny0dcFFA0DXFoWyVzN--0--x9xye.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-412",
    "title": "Creación IA #412",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/xugRHamRwbF3cNh6X0OB--0--v65da.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-413",
    "title": "Creación IA #413",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Y7DSHB6TQHnMBQz1FIlU--1--ilcdg.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-414",
    "title": "Creación IA #414",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/yao92f41WHlKkqtu4s2c--0--6br6s.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-415",
    "title": "Creación IA #415",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/YCHmOTz6JTb94O3c80kD--0--13bll.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-416",
    "title": "Creación IA #416",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/yEorUvBKxtxZatn0bWWu--0--rmwlj.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-417",
    "title": "Creación IA #417",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ypkBuDqyqEiTmX8VDERy--0--bia2e.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-418",
    "title": "Creación IA #418",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/YS7PMcolAynOcCAPi2lJ--0--tf11s.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-419",
    "title": "Creación IA #419",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/yzJ2VoS9sxvN0MYkeJte--0--zyi5t.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-420",
    "title": "Creación IA #420",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Z2l730LjGLHqqlX0MI6O--3--k18to.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-421",
    "title": "Creación IA #421",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/z3d2lDKGoUCUxZe4t9Kq--0--i4r0c.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-422",
    "title": "Creación IA #422",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Z9SOQVdBSmtGjNjLZiDL--0--zqq3u.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-423",
    "title": "Creación IA #423",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/z9u03eJmKIcpdD0pnU6g--0--ck0yl.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-424",
    "title": "Creación IA #424",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Za8uAw0sV2rV2Vv2gNI9--0--2q4bk.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-425",
    "title": "Creación IA #425",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/Zb6X2H2LTdwfcwiNZps9--0--qsssf.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-426",
    "title": "Creación IA #426",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/zBckJz4fwSWbA6DMo5aG--0--3591m_2x-clty-upscale-y8016.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-427",
    "title": "Creación IA #427",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/zf8zKxBvAmLB24dawO4G--0--1ijl8.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-428",
    "title": "Creación IA #428",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ZHhjicxenVhV0tUYW2ep--1--6x0br.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-429",
    "title": "Creación IA #429",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/zoM9zEUWn0yLTAK29iEs--0--iem44.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-430",
    "title": "Creación IA #430",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ZoRKXzHylMCtnMExIf8s--0--ofc7w.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-431",
    "title": "Creación IA #431",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/zSGpu0KR6ettuwM265bv-vcCvv-adjusted.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-432",
    "title": "Creación IA #432",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ZTToBaloy1hLzbzMMd4x--0--kirg2_2x-clty-upscale-vafgn.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-433",
    "title": "Creación IA #433",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/zxoAn8zwWfLZwcyiV3Lv--0--wwu8p.jpg",
    "aspectRatio": "portrait",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-434",
    "title": "Creación IA #434",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ZXof2F0l8qkBXfRyZBAp--0--umqw1.jpg",
    "aspectRatio": "landscape",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-435",
    "title": "Creación IA #435",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/zYMVDbeDeuMaUIXelZ29--1--c5zlh.jpg",
    "aspectRatio": "square",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  },
  {
    "id": "art-436",
    "title": "Creación IA #436",
    "category": "AI",
    "year": 2025,
    "artist": "Wilson A. Andrade M.",
    "description": "Imagen creada con Inteligencia Artificial usando \"NightCafe Creator\"",
    "medium": "Arte Generativo por IA",
    "dimensions": "Formato Digital HD",
    "image": "/images/gallery/ZzmTZotq4wrQ2BcgJHyN--0--021q1.jpg",
    "aspectRatio": "wide",
    "featured": false,
    "tags": [
      "AI Art",
      "NightCafe",
      "Generativo"
    ]
  }
];

export const galleryCategories = [
  'Todas',
  'AI'
] as const;
