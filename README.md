@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Oswald:wght@200..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

html {
scroll-behavior: smooth;
}

body::-webkit-scrollbar-thumb {
background-color: #c7a770;
border-radius: 20px;
}
body::-webkit-scrollbar {
background-color: #fff;
width: 6px;
border-radius: 20px;
}

.scroll-bar::-webkit-scrollbar-thumb {
background-color: #9d9d9d;
border-radius: 20px;
}
.scroll-bar::-webkit-scrollbar {
height: 6px;
border-radius: 20px;
}

.quill h1 {
font-family: "Playfair Display", sans-serif;
font-size: 36px !important;
font-weight: 500;
}
.quill h2 {
font-family: "Playfair Display", sans-serif;
font-size: 28 !important;
font-weight: 400;
}
.quill ul {
margin-left: 25px;
list-style: circle;
}
.quill iframe {
width: 100%;
height: 400px;
}

.leaflet-container {
margin-top: 10px;
height: 380px;
width: 100%;
/_ z-index: 10; _/
}

.cart-container {
position: absolute;
top: 0;
right: 0;
height: 100%;
width: 300px;
background-color: white;
z-index: 50;
overflow-y: auto;
border: 1px solid #ccc;
transform: translateX(100%);
transition: transform 0.3s ease-in-out;
}

.cart-container.open {
transform: translateX(0);
}

###############################

extend: {
fontFamily: {
Oswald: ["Oswald", "sans-serif"],
OpenSans: ["Open Sans", "sans-serif"],
Roboto: ["Roboto", "sans-serif"],
PlayFair: ["Playfair Display", "serif"],
Poppins: ["Poppins", "sans-serif"],
},
colors: {
colorGray: {
light: "#AAAAAA",
medium: "#272626",
dark: "#333333",
},
colorBlack: {
light: "#111111",
dark: "#000000",
},
goldenColor: "#C7A770",
},
},


#############################

md:hidden z-[999] hidden mb-0 list-disc sticky top-0 text-colorGray-light/30 w-full shadow-md h-[60px]  bg-red-400 lg:flex gap-12 items-center justify-between py-4


    <div className="w-[1000px] mx-auto flex items-center justify-between">
        <div className="list-none">
          <Link
            to={"/"}
            className={`text-[15px] font-Oswald ${
              pathname === "/" ? "text-goldenColor" : "text-colorBlack-dark"
            } uppercase`}
          >
            <li className={navigationMenuTriggerStyle()}>home</li>
          </Link>
        </div>
        {categories?.map((category, index) => (
          <li
            key={index}
            className={`relative list-none ${
              category.slug === "classificados"
                ? "group transition-all duration-200 ease-in-out"
                : ""
            }`}
          >
            <Link
              className={`text-[15px] font-Oswald  text-colorBlack-dark uppercase ${
                category.slug === decodeURL ? "text-goldenColor" : ""
              } hover:text-goldenColor duration-100 transition-all ease-in `}
              to={
                category.slug !== "classificados"
                  ? handleNavigate(category.slug)
                  : "#"
              }
            >
              {category.name}
            </Link>

            <div className="absolute top-5 -right-1/2 border bg-white w-[200px] h-[140px] rounded-md group-hover:block hidden transition-all duration-200 ease-in-out ">
              <ul className="flex flex-col w-full h-full items-center justify-center text-center gap-y-2">
                <li className="w-full flex text-goldenColor  hover:text-white cursor-pointer p-3 hover:bg-goldenColor bg-opacity-15">
                  <Link
                    to={
                      category.slug === "classificados"
                        ? handleNavigate(category.slug)
                        : "#"
                    }
                    className="w-full text-[14px] font-bold "
                  >
                    Quero comprar
                  </Link>
                </li>
                <li className="w-full text-goldenColor  hover:text-white cursor-pointer p-3 hover:bg-goldenColor bg-opacity-15">
                  <Link
                    to="/formulario"
                    className="w-full text-[14px] font-bold "
                  >
                    Quero vender
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        ))}
      </div>