import client from "@/apollo/apolloClient";
import {
  CreateFriendInput,
  CreateHangoutInput,
  CreateScheduleInput,
  CreateUserInput,
  DeleteFriendInput,
  DeleteHangoutInput,
  DeleteScheduleInput,
  Friend,
  Hangout,
  MutationCreateFriendArgs,
  MutationCreateHangoutArgs,
  MutationCreateScheduleArgs,
  MutationCreateUserArgs,
  MutationDeleteFriendArgs,
  MutationDeleteHangoutArgs,
  MutationDeleteScheduleArgs,
  MutationUpdateFriendAcceptArgs,
  MutationUpdateHangoutArgs,
  MutationUpdateScheduleArgs,
  MutationUpdateUserArgs,
  Schedule,
  UpdateFriendAcceptInput,
  UpdateHangoutInput,
  UpdateScheduleInput,
  UpdateUserInput,
  User,
} from "@/apollo/generated/graphql";
import { CREATE_FRIEND } from "@/apollo/mutation/Friend/createFriend";
import { DELETE_FRIEND } from "@/apollo/mutation/Friend/deleteFriend";
import { UPDATE_FRIEND_ACCEPT } from "@/apollo/mutation/Friend/updateFriendAccept";
import { CREATE_HANGOUT } from "@/apollo/mutation/Hangout/createHangout";
import { DELETE_HANGOUT } from "@/apollo/mutation/Hangout/deleteHangout";
import { UPDATE_HANGOUT } from "@/apollo/mutation/Hangout/updateHangout";
import { CREATE_SCHEDULE } from "@/apollo/mutation/Schedule/createSchedule";
import { DELETE_SCHEDULE } from "@/apollo/mutation/Schedule/deleteSchedule";
import { UPDATE_SCHEDULE } from "@/apollo/mutation/Schedule/updateSchedule";
import { CREATE_USER } from "@/apollo/mutation/User/createUser";
import { UPDATE_USER } from "@/apollo/mutation/User/updateUser";

export const CreateUser = async (input: CreateUserInput) => {
  let data, err;
  console.log(client)
  await client
    .mutate<User, MutationCreateUserArgs>({
      mutation: CREATE_USER,
      variables: {
        input: {
          name: input.name,
          id: input.id,
          description: input.description,
          image: input.image
        },
      },
    })
    .then((res) => (data = res.data))
    .catch((error) => (err = error));
  return { data, err };
};

export const UpdateUser = async (input: UpdateUserInput) => {
  let data, err;
  await client
    .mutate<User, MutationUpdateUserArgs>({
      mutation: UPDATE_USER,
      variables: {
        input: {
          name: input.name,
          id: input.id,
          description: input.description,
          image: input.image
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const CreateHangout = async (input: CreateHangoutInput) => {
  let data, err;
  await client
    .mutate<Hangout, MutationCreateHangoutArgs>({
      mutation: CREATE_HANGOUT,
      variables: {
        input: {
          name: input.name,
          user_id: input.user_id,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const UpdateHangout = async (input: UpdateHangoutInput) => {
  let data, err;
  await client
    .mutate<Hangout, MutationUpdateHangoutArgs>({
      mutation: UPDATE_HANGOUT,
      variables: {
        input: {
          id: input.id,
          user_id: input.user_id,
          name: input.name,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
    return{data,err};
};

export const DeleteHangout = async (input: DeleteHangoutInput) => {
  let data, err;
  await client
    .mutate<Hangout, MutationDeleteHangoutArgs>({
      mutation: DELETE_HANGOUT,
      variables: {
        input: {
          id: input.id,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const CreateSchedule = async (input: CreateScheduleInput) => {
  let data, err;
  await client
    .mutate<Schedule, MutationCreateScheduleArgs>({
      mutation: CREATE_SCHEDULE,
      variables: {
        input: {
          date: input.date,
          user_id: input.user_id,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const UpdateSchedule = async (input: UpdateScheduleInput) => {
  let data, err;
  await client
    .mutate<Schedule, MutationUpdateScheduleArgs>({
      mutation: UPDATE_SCHEDULE,
      variables: {
        input: {
          date: input.date,
          user_id: input.user_id,
          id: input.id,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const DeleteSchedule = async (input: DeleteScheduleInput) => {
  let data, err;
  await client
    .mutate<Schedule, MutationDeleteScheduleArgs>({
      mutation: DELETE_SCHEDULE,
      variables: {
        input: {
          id: input.id,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const CreateFriend = async (input: CreateFriendInput) => {
  let data, err;
  await client
    .mutate<Friend, MutationCreateFriendArgs>({
      mutation: CREATE_FRIEND,
      variables: {
        input: {
          friend_id: input.friend_id,
          user_id: input.user_id,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};


export const UpdateFriendAccept = async (input: UpdateFriendAcceptInput) => {
  let data, err;
  await client
    .mutate<Friend, MutationUpdateFriendAcceptArgs>({
      mutation: UPDATE_FRIEND_ACCEPT,
      variables: {
        input: {
          id: input.id,
          user_id: input.user_id,
          friend_id: input.friend_id,
          accept: input.accept,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};

export const DeleteFriend = async (input: DeleteFriendInput) => {
  let data, err;
  await client
    .mutate<Friend, MutationDeleteFriendArgs>({
      mutation: DELETE_FRIEND,
      variables: {
        input: {
          id: input.id,
        },
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch((error) => {
      err = error;
    });
  return { data, err };
};