import axios from "axios";

const pageUrl = process.env.NEXT_PUBLIC_MAINPAGE_URL;
const docsUrl = process.env.NEXT_PUBLIC_DOCUMENTS_URL;
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
        footer: data.footer
    };
};

// get documents from API by category id

const getDocuments = async (categoryId = '') => {
    const response = await axios.get(docsUrl + `/${categoryId}`, config);
    console.log(response.data.data.attributes.documents);
    return _transgoormDocumentData(response.data.data.attributes.documents);
};

const _transgoormDocumentData = (data) => {
    return {
        documents: data
    }
};

export { getContent, getDocuments };