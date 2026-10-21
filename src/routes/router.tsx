import { createBrowserRouter } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { AboutPage } from '../pages/AboutPage';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PartnersPage } from '../pages/PartnersPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { ServicesPage } from '../pages/ServicesPage';
import { CategoryPage } from '../pages/CategoryPage';

export const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/partner', element: <PartnersPage /> },
      { path: '/chi-siamo', element: <AboutPage /> },
      { path: '/realizzazioni', element: <ProjectsPage /> },
      { path: '/prodotti-e-servizi', element: <ServicesPage /> },
      { path: '/prodotti-e-servizi/:slug', element: <CategoryPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
