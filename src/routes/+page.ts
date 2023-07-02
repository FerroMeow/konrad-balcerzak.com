import type { Project } from "$lib/projects/CardData"
import type { PageLoad } from "./$types"
export const load = ((): {
    projects: Project[]
} => {
    return {
        projects: [
            {
                name: "Asmodev",
                href: new URL("https://www.asmodev.com/pl/"),
                description: "Implementation of design, whole page development, and maintenance between 2020 - 2021",
            },
            {
                name: "Dark Moonlight",
                href: new URL("https://dark-moonlight.com/"),
                description: "Implementation of design, whole page development",
            },
            {
                name: "Ultimate Games Mobile",
                href: new URL("https://ulgmobile.com/"),
                description: "Implementation of design, whole page development",
            },
            {
                name: "VapeFully",
                description: "Backend modifications, integrations, maintenance (2021 - Now), widgets",
                href: new URL("https://vapefully.com/"),
            },
            {
                name: "Breed Bros",
                description: "Website backend adjustments",
                href: new URL("https://breedbros.com/"),
            },
            {
                name: "Decydownik",
                description: "Slight backend modifications, language select, image login, and long-term deciding functionality",
                href: new URL("http://decydownik.pl/"),
            },
            {
                name: "OneReach.ai LMS",
                description: "Partially Implementing design, backend and frontend functionality. *Page access is only available for registered OneReach users.",
                href: new URL("https://onereach.ai/learning/")
            },
            {
                name: "Kapitales",
                description: "Product customizer Front-end, backend; implementing new customizer UI, saving user customization.",
                href: new URL("https://kapitales.fr/")
            }
        ]
    }
}) satisfies PageLoad