import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedLessons: [],
  quizScores: {},
};

const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    markLessonComplete: (state, action) => {
      const lessonId = action.payload;
      if (!state.completedLessons.includes(lessonId)) {
        state.completedLessons.push(lessonId);
      }
    },
    setQuizScore: (state, action) => {
      const { lessonId, score, total } = action.payload;
      state.quizScores[lessonId] = { score, total };
    },
  },
});

export const { markLessonComplete, setQuizScore } = progressSlice.actions;
export default progressSlice.reducer;