import { reactive } from "vue";

export const store = reactive({
    contatcs: {
        "tel": "+1 (305) 1234-5678",
        "email": "hello@example.com",
        "address": "Main Avenue, 987"
    },
    options: [
        {
            "name": "home"
        },
        {
            "name": "about"
        },
        {
            "name": "services"
        },
        {
            "name": "pricing"
        },
        {
            "name": "blog"
        },
    ],
    about: [
        {
            "name": "The Company",
        },
        {
            "name": "Insitutional",
        },
        {
            "name": "Social & Events",
        },
        {
            "name": "Innovation",
        },
        {
            "name": "Enviorment",
        },
        {
            "name": "Technologies",
        },
    ],
    services: [
        {
            "name": "Audit & Assurance",
        },
        {
            "name": "Financial Advisory",
        },
        {
            "name": "Analytics an M&A",
        },
        {
            "name": "Middle Marketing",
        },
        {
            "name": "Legal Consoulting",
        },
        {
            "name": "Regulatory Risk",
        },
    ],
    support: [
        {
            "name": "Responsability",
        },
        {
            "name": "Terms of Use",
        },
        {
            "name": "About Cookies",
        },
        {
            "name": "Privacy Policy",
        },
        {
            "name": "Accessibility",
        },
        {
            "name": "Information",
        },
    ]
})