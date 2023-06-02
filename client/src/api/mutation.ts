import client from "@/apollo/apolloClient";
import {
  CreateFriendInput,
  CreateHangoutInput,
  CreateScheduleInput,
  CreateUserInput,
  DeleteFriendInput,
  DeleteHangoutInput,
  Friend,
  Hangout,
  MutationCreateFriendArgs,
  MutationCreateHangoutArgs,
  MutationCreateScheduleArgs,
  MutationCreateUserArgs,
  MutationDeleteFriendArgs,
  MutationDeleteHangoutArgs,
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
import { CREATE_USER } from "@/apollo/mutation/User/createUser";
import { UPDATE_USER } from "@/apollo/mutation/User/updateUser";

export const CreateUser = async (input: CreateUserInput) => {
  let data, err;
  await client
    .mutate<User, MutationCreateUserArgs>({
      mutation: CREATE_USER,
      variables: {
        input: {
          name: input.name,
          firebase_id: input.firebase_id,
          description: input.description,
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
          firebase_id: input.firebase_id,
          description: input.description,
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
      mutation: CREATE_HANGOUT,
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
      mutation: UPDATE_HANGOUT,
      variables: {
        input: {
          date: input.date,
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

export const DeleteSchedule = async (input: DeleteHangoutInput) => {
  let data, err;
  await client
    .mutate<Schedule, MutationDeleteHangoutArgs>({
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