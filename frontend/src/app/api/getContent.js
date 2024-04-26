import axios from "axios";

const pageUrl = process.env.NEXT_PUBLIC_MAINPAGE_URL;
const docsUrl = process.env.NEXT_PUBLIC_DOCUMENTS_URL;
const categoryUrl = process.env.NEXT_PUBLIC_CATEGOTIES_URL;
const token = process.env.NEXT_PUBLIC_TOKEN;

const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    },
};

// get main page content from API

const getContent = async () => {
    const response = await axios.get(pageUrl, config);
    return _transformPageData(response.data.data.attributes);
};

const _transformPageData = (data) => {
    return {
        header: data.header,
        about: data.about,
        documents: data.documents,
        footer: data.footer,
    };
};

// get all categories data from API

const getAllCategories = async () => {
    const response = await axios.get(categoryUrl, config);
    return _transformCategoriesData(response.data.data);
};

// drops subCategories from categories data

const _transformCategoriesData = (data) => {
    const mainCategories = data.filter((category) => {
        if (category.attributes.subCategories.data.length >= 0 && category.attributes.parentCategory.data === null) {
            return category;
        }
    });
    return mainCategories;
};

// get documents from API by category id

const getCategoryById = async (id) => {
    const response = await axios.get(categoryUrl + `/${id}`, config);
    return(response.data.data);
};

export { getContent, getAllCategories, getCategoryById };
