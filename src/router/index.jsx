import { createBrowserRouter, redirect } from "react-router-dom";
import ManagerHomePage from "../pages/manager/home";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import SuccessCheckoutPage from "../pages/SuccessCheckout";
import LayoutDashboard from "../components/layout";
import ManageCourse from "../pages/manager/courses";
import CreateCoursesPage from "../pages/manager/create-courses";
import CourseDetailPage from "../pages/manager/course-detail";
import ManageContentPage from "../pages/manager/content-create";
import ManageCoursePreview from "../pages/manager/course-preview";
import ManageStudentsPage from "../pages/manager/students";
import StudentPage from "../pages/student/StudentOverview";
import secureLocalStorage from "react-secure-storage";
import { MANAGER_SESSION, STORAGE_KEY } from "../utils/const";
import { getCategories, getCourse } from "../service/courseService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ManagerHomePage />,
  },
  {
    path: "/manager/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/manager/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/success-checkout",
    element: <SuccessCheckoutPage />,
  },
  {
    path: "/manager",
    id: MANAGER_SESSION,
    loader: async() => {
      const session = secureLocalStorage.getItem(STORAGE_KEY)

      if (!session || session.role !== 'manager') {
        throw redirect('/manager/sign-in')
      }

      return true
      
    },
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <ManagerHomePage />,
      },
      {
        path: "/manager/courses",
        loader: async () => {
          const data = getCourse()

          console.log(data);

          return data
        },
        element: <ManageCourse />,
      },
      {
        path: '/manager/courses/create',
        loader: async () => {
          const category = getCategories()

          console.log(category);
          
          return category
        },
        element: <CreateCoursesPage/>
      },
      {
        path: '/manager/courses/:id',
        element: <CourseDetailPage/>
      },
      {
        path: '/manager/courses/:id/create',
        element: <ManageContentPage/>
      },
      {
        path: '/manager/courses/:id/preview',
        element: <ManageCoursePreview/>
      },
      {
        path: '/manager/students',
        element: <ManageStudentsPage/>
      }
    ],
  },
  {
    path: '/student',
    element: <LayoutDashboard isAdmin={false} />,
    children: [
        {
            index: true,
            element: <StudentPage/>
        },
        {
            path: '/student/detail-course/:id',
            element: <ManageCoursePreview/>
        }
    ]
  }
]);

export default router;
