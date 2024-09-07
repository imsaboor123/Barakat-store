import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFilterContext } from '../../context/FilterMenu';
import Cards from '../../components/Cards';
import { IoIosArrowDown } from 'react-icons/io';

const FilterCategory = () => {
    const { category: selectedCategory, subcategory: selectedSubcategory } = useParams();
    const { categoriesData = {} } = useFilterContext();
    const [subCategories, setSubCategories] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [clickedIndex, setClickedIndex] = useState(null);
    const [isApplyDisabled, setIsApplyDisabled] = useState(true);
    const [isResetDisabled, setIsResetDisabled] = useState(true);

    const defaultImage = '/default-image.png';

    const categoryData = categoriesData?.categories?.find(
        category => category.category === selectedCategory
    );

    const allImage = categoryData?.image || defaultImage;

    useEffect(() => {
        if (selectedCategory && categoryData) {
            const subCategoriesList = categoryData.subcategories || [];
            setSubCategories(subCategoriesList);

            if (selectedSubcategory) {
                const selectedSubCat = subCategoriesList.find(sub => sub.name === selectedSubcategory);
                setFilteredItems(selectedSubCat?.items || []);
            } else {
                setFilteredItems(categoryData.items || []);
            }
        }
    }, [selectedCategory, selectedSubcategory, categoryData]);

    const uniqueCountries = () => {
        const countries = new Set();
        subCategories.forEach(subCat => {
            subCat.items?.forEach(item => {
                if (item.country) countries.add(item.country);
            });
        });
        return Array.from(countries);
    };

    const handleCountryClick = (country) => {
        setSelectedCountry(country);
        const filteredByCountry = subCategories.flatMap(subCat => subCat.items || [])
            .filter(item => item.country === country);
        setFilteredItems(filteredByCountry);
    };

    const handleCardClick = (index) => {
        setClickedIndex(index);
        // Add additional logic here if needed when a card is clicked
    };

    const handleApply = () => {
        // Implement your apply logic here
        console.log("Apply clicked with selected country:", selectedCountry);
    };

    const handleReset = () => {
        setSelectedCountry(null);
        setFilteredItems(categoryData?.items || []);
        console.log("Reset clicked");
    };

    useEffect(() => {
        // Enable the Apply button if any country is selected
        setIsApplyDisabled(selectedCountry === null);

        // Enable the Reset button if any country is selected
        setIsResetDisabled(selectedCountry === null);
    }, [selectedCountry]);

    return (
        <div className="min-h-screen">
            <div className="max-w-screen-2xl mt-5 mx-auto md:px-24 px-4">
                <div className="font-bold hidden md:flex text-sm">
                    <Link to="/">Home</Link> / {selectedCategory}
                </div>
                <div className="flex pt-5 w-full">
                    {/* Sidebar */}
                    <div className="md:w-1/3 overflow-hidden hidden md:block">
                        <div className="flex p-3 border border-zinc-200 rounded-t bg-[#f9f9f9] justify-between items-center border-b-2">
                            <div className="font-semibold text-lg">Categories</div>
                            <IoIosArrowDown />
                        </div>
                        <div className="p-3 border bg-[#f9f9f9]">
                            <div className="h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                <ul className="space-y-1">
                                    {categoriesData.categories?.map(category => (
                                        <li
                                            key={category.category}
                                            className={`cursor-pointer text-sm p-2 rounded-md hover:bg-gray-200 ${
                                                selectedCategory === category.category ? 'bg-gray-300' : ''
                                            }`}
                                        >
                                            <Link to={`/filter/${category.category}`}>
                                                {category.category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        {/* Express Delivery Section */}
                        <div className="bg-[#eefbf1] flex space-x-20 rounded-sm mt-7 p-4">
                            <h1 className="font-bold text-nowrap">Express Delivery</h1>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                        </div>
                        {/* Origin Section */}
                        <div className="mt-5 border">
                            <div className="flex p-3 bg-[#f9f9f9] justify-between items-center border-b-2">
                                <div className="font-semibold text-lg">Origin</div>
                                <IoIosArrowDown />
                            </div>
                            <div className="p-3 bg-[#f9f9f9]">
                                <div className="h-60 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                                    <ul className="space-y-1">
                                        {uniqueCountries().map(country => (
                                            <li
                                                key={country}
                                                className={`cursor-pointer text-sm p-2 flex items-center space-x-3 rounded-md hover:bg-gray-200 ${
                                                    selectedCountry === country ? 'bg-gray-300' : ''
                                                }`}
                                                onClick={() => handleCountryClick(country)}
                                            >
                                                <input type="checkbox" value="synthwave" className="checkbox border-green-500 theme-controller" />
                                                <span>{country}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="mt-3 flex justify-between">
                                    {/* Dynamic Buttons */}
                                    <button 
                                        className={`btn text-white px-4 py-2 rounded-md ${
                                            isApplyDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                                        }`} 
                                        onClick={handleApply}
                                        disabled={isApplyDisabled}
                                    >
                                        {isApplyDisabled ? "Apply" : "Apply Filter"}
                                    </button>
                                    <button 
                                        className={`btn border px-4 py-2 rounded-md ${
                                            isResetDisabled ? 'bg-white text-gray-400 border-gray-400 cursor-not-allowed' : 'bg-white text-green-500 border-green-500 hover:bg-gray-100'
                                        }`} 
                                        onClick={handleReset}
                                        disabled={isResetDisabled}
                                    >
                                    {selectedCountry === null ? "Reset" : "Clear Selection"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div> 
                    {/* Main Content */}
                    <div className="w-full hidden md:block px-8">
                        <div className="flex justify-between gap-24 md:gap-96">
                            <div>
                                <div className="font-bold text-nowrap text-xl">{selectedCategory}</div>
                                <div className="text-xs">
                                    <span>
                                        All items ({filteredItems.length || "result not found"})
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 text-nowrap items-center justify-between">
                                <label className="block text-sm font-medium">Sort by:</label>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option>Best Seller</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest Arrivals</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full border mt-3 p-4 border-zinc-300 rounded-md bg-[#f9f9f9]">
                            <div className="flex gap-2">
                                <div className="flex flex-col w-20 items-center">
                                    <div
                                        onClick={() => handleCardClick(0)}
                                        className={`bg-white flex justify-center border rounded-md items-center w-20 h-20 cursor-pointer ${
                                            clickedIndex === 0 ? 'border-2 border-green-300' : 'border-green-300'
                                        }`}
                                    >
                                        <img
                                            src={allImage}
                                            alt="All"
                                            className="w-20 h-20 object-cover"
                                        />
                                    </div>
                                    <p className={`mt-2 text-sm ${clickedIndex === 0 ? 'text-green-600 font-semibold' : ''}`}>
                                        All
                                    </p>
                                </div>
                                {subCategories.map((subCat, index) => (
                                    <div
                                        key={subCat.name}
                                        className="flex flex-col w-20 items-center"
                                    >
                                        <div
                                            onClick={() => handleCardClick(index + 1)}
                                            className={`bg-white flex justify-center border rounded-md items-center w-20 h-20 cursor-pointer ${
                                                clickedIndex === index + 1 ? 'border-2 border-green-300' : 'border-green-300'
                                            }`}
                                        >
                                            <img
                                                src={subCat.image || defaultImage}
                                                alt={subCat.name}
                                                className="w-20 h-20 object-cover"
                                            />
                                        </div>
                                        <p className={`mt-2 text-sm ${clickedIndex === index + 1 ? 'text-green-600 font-semibold' : ''}`}>
                                            {subCat.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-3">
                           {
                            filteredItems.length > 0? (
                                <div className="grid grid-cols-4  ">
                                    {filteredItems.map(item => (
                                        <div key={item.id} className="w-full ">
                                            {/* Product Card */}
                                            <Cards item={item} />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="flex justify-center items-center text-center">
                                    <p className="text-xl font-bold text-gray-500">
                                        No items found matching your criteria.
                                    </p>
                                </div>
                            )
                           }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCategory;
