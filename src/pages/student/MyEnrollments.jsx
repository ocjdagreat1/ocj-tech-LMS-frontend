import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Line } from 'rc-progress';
import Footer from '../../component/student/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

const MyEnrollments = () => {
  const {
    enrolledCourses,
    calculateCourseDuration,
    navigate,
    userData,
    fetchUserEnrolledCourses,
    backendUrl,
    getToken,
    CalculateNoOfLectures,
  } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([]);

  const getCourseProgress = async () => {
    try {
      const token = await getToken();
      const tempProgressArray = await Promise.all(
        enrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${backendUrl}/api/user/get-course-progress`,
            { courseId: course._id },
            { headers: { Authorization: `Bearer ${token}` } }
          );

          const totalLectures = CalculateNoOfLectures(course);
          const lectureCompleted = data.progressData?.lectureCompleted?.length || 0;

          return { totalLectures, lectureCompleted };
        })
      );

      setProgressArray(tempProgressArray);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (userData) {
      fetchUserEnrolledCourses();
    }
  }, [userData]);

  useEffect(() => {
    if (enrolledCourses?.length > 0) {
      getCourseProgress();
    }
  }, [enrolledCourses]);

  return (
    <>
      <div className="md:px-36 px-4 pt-10">
        <h1 className="text-2xl font-semibold">My Enrollments</h1>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border mt-10">
            <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 font-semibold">Completed</th>
                <th className="px-4 py-3 font-semibold">Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {enrolledCourses?.map((course, index) => {
                const progress = progressArray[index] || { lectureCompleted: 0, totalLectures: 0 };
                const percentCompleted =
                  progress.totalLectures > 0
                    ? (progress.lectureCompleted * 100) / progress.totalLectures
                    : 0;
                const isCompleted = progress.lectureCompleted === progress.totalLectures;

                return (
                  <tr key={course._id || index} className="border-b border-gray-500/20">
                    <td className="px-4 py-3 md:flex md:items-center md:space-x-3">
                      <img
                        src={course.courseThumbnail}
                        alt={course.courseTitle}
                        className="w-20 md:w-28 mb-2 md:mb-0"
                      />

                      <div className="flex-1">
                        <p className="mb-1 text-sm md:text-base">{course.courseTitle}</p>

                        <Line
                          strokeWidth={2}
                          percent={percentCompleted}
                          className="bg-gray-300 rounded-full w-full"
                        />
                      </div>
                    </td>

                    <td className="px-4 py-3 whitespace-nowrap">{calculateCourseDuration(course)}</td>

                    <td className="px-4 py-3 whitespace-nowrap">
                      {`${progress.lectureCompleted} / ${progress.totalLectures}`} <span>Lectures</span>
                    </td>

                    <td className="px-4 py-3 text-right">
                      <button
                        className="px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 text-white text-xs sm:text-sm"
                        onClick={() => navigate('/player/' + course._id)}
                      >
                        {isCompleted ? 'Completed' : 'Ongoing'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyEnrollments;
