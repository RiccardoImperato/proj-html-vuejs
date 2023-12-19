import { reactive } from "vue";

export const store = reactive({
    contatcs: {
        "tel": "+1 (305) 1234-5678",
        "email": "hello@example.com"
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
    services: [
        {
            "name": "Audit & Assurance",
            "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            "name": "Financial Advisory",
            "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            "name": "Analytics an M&A",
            "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            "name": "Middle Marketing",
            "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            "name": "Legal Consoulting",
            "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
        {
            "name": "Regulatory Risk",
            "info": "Lorem ipsum dolor sit amet consectetur adipiscing elit"
        },
    ]
})