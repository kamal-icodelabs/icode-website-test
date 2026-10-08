import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, 
}); 
http.interceptors.request.use(
  function (config) {
    config.headers["Content-Type"] = "application/json";

    // Return the modified config to continue with the request
    return config;
  },
  function (error) {
    // Return any error encountered in the request configuration
    return Promise.reject(error);
  }
);

// POST request for submitting form data
export const createContactMessage = async (formData) => {
  return http.post("/contact-uses", formData);
};

// API Endpoints Here

export const serviceDetails = async () => {
  return http.get(`/service-details`);
};
export const companyLogoDetails = async () => {
  return http.get(`/company-logos?populate=*&pagination[pageSize]=35&sort[0]=id:desc`);
};

export const ourApproachDetails = async () => {
  return http.get(`/ourapproaches?populate=*`);
};

export const howsWork = async () => {
  return http.get(`/processes`);
};

export const expProcesses = async () => {
  return http.get(`/experiences-processes?populate=*`);
};

export const expertise = async () => {
  return http.get(`/expertises?populate=*`);
};

export const industry = async () => {
  return http.get(`/industries?populate=*`);
};

export const blog = async () => {
  return await http.get(`/articles?populate=*`);
};

export const blogDetail = async (types = []) => {
  if (Array.isArray(types) && types.length > 0) {
    const filterParams = types
      .map((type, index) => `filters[Type][$in][${index}]=${encodeURIComponent(type)}`)
      .join("&");
    return await http.get(
      `/articles?${filterParams}&pagination[pageSize]=6&sort[0]=publishedAt:desc&populate=*`
    );
  }
  return await http.get(`/articles?pagination[pageSize]=200&populate=*`);
};

export const singleBlogDeatail = async (id) => {
  return await http.get(`/articles/${id}?populate=*`);
};

export const sendEmail = async () => {
  return await http.post(`/api/email`);
};

// Static data fetching functions with caching
export const fetchWithCache = async (url, revalidate = 3600) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate },
  });
  
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  
  return response.json();
};

// Cached versions of API calls
export const cachedBlogDetail = () => fetchWithCache(
  `${process.env.NEXT_PUBLIC_BASE_URL}/articles?pagination[pageSize]=200&populate=*`,
  3600
);

export const cachedSingleBlogDetail = (id) => fetchWithCache(
  `${process.env.NEXT_PUBLIC_BASE_URL}/articles/${id}?populate=*`,
  1800
);

export const cachedCompanyLogos = () => fetchWithCache(
  `${process.env.NEXT_PUBLIC_BASE_URL}/company-logos?populate=*`,
  3600
);
