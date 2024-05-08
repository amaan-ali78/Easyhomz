import { ROUTES } from "./constants";
// Navbar and Footer
export const COMPANY_NAME_1 = "Eazyhomz";
export const COMPANY_NAME_2 = ".";
export const COPYRIGHT = "Copyright @ All Rights Reserved";
export const NAVLINKS = ['places', 'about']

export const NAV_ROUTE_LINKS = [
    {
        text:'Eazyhomz',
        to:ROUTES.DASHBOARD,
        nestedLinks:[],
        havingNestedRoute:false
    },
    {
        text:'Design Ideas',
        to:ROUTES.DESIGN_IDEAS,
        nestedLinks:[
            {
                text:'Kitchen Ideas',
                to:ROUTES.BEDROOM_IDEAS,
                nestedLinks:[],
                havingNestedRoute:false
            },
            {
                text:'Bedroom Ideas',
                to:ROUTES.DASHBOARD,
                nestedLinks:[],
                havingNestedRoute:false
            },
            {
                text:'Bathroom Ideas',
                to:ROUTES.DASHBOARD,
                nestedLinks:[],
                havingNestedRoute:false
            }
        ],
        havingNestedRoute:true

    },
    {
        text:'Living Area',
        to:ROUTES.LIVING_AREA,
        nestedLinks:[],
        havingNestedRoute:false
    },
    {
        text:'Kitchen',
        to:ROUTES.KITCHEN,
        nestedLinks:[],
        havingNestedRoute:false
    },
    {
        text:'Bedroom',
        to:ROUTES.BEDROOM,
        nestedLinks:[],
        havingNestedRoute:false
    },
    {
        text:'Bathroom',
        to:ROUTES.BATHROOM,
        nestedLinks:[],
        havingNestedRoute:false
    },
    {
        text:'Furniture By Eazyhomz',
        to:ROUTES.FURNITURE_BY_EASYHOMEZ,
        nestedLinks:[],
        havingNestedRoute:false
    },
]

export const Address = {
    mail : "care@eazyhomz.com",
    phone : "+971 563163635",
    address : "Dubai, UAE \n Delhi, India",
}