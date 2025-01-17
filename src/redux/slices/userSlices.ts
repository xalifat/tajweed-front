import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface UserState {
  user: UserItem;
  users: UserItem[];
}

interface UserItem {
  _id: string;
  login: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  __v: number;
}

const initialState: UserState = {
  user: {},
  users: [],
  bookmarks: [],
};

// Инфо пользователя
export const userInfo = createAsyncThunk("user/Info", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().application.token}`,
      },
    });
    const json = await res.json();
    return json;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

// Изменение пользователя
export const userChangeInfo = createAsyncThunk(
  "user/Change",
  async ({ firstName, lastName }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/profile", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({ firstName, lastName }),
      });
      const json = await res.json();

      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      
      
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const userChangeAvatar = createAsyncThunk(
  "user/ChangeAvatar",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/profile/change-img", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: data,
      });
      const json = await res.json();
      return json;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const bookmark = createAsyncThunk(
  "user/addBookmark",
  async (moduleId, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/bookmark", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({ moduleId }),
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userAll = createAsyncThunk("user/all", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:3000/users");
    const user = await res.json();
    return user;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const userSlices = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userChangeInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userChangeInfo.rejected, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.error = action.payload[0].msg;
        } else {
          state.error = action.payload;
        }
      })
      .addCase(userChangeAvatar.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(bookmark.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(userAll.fulfilled, (state, action) => {
        state.users = action.payload;
      });
  },
});

export default userSlices.reducer;
