CREATE TABLE `friend` (
    `id`          varchar(255) NOT NULL,
    `user_id`     varchar(255) NOT NULL,
    `friend_id`   varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
