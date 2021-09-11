---- drop ----
DROP TABLE IF EXISTS `my_table`;

---- create ----
create table IF not exists `my_table`
(
  `id`               INT(20) AUTO_INCREMENT,
  `name`             VARCHAR(20) NOT NULL,
  `message`          TEXT(100) NOT NULL,
  `created_at`       Datetime DEFAULT NULL,
  `updated_at`       Datetime DEFAULT NULL,
    PRIMARY KEY (`id`)
) DEFAULT CHARSET=utf8 COLLATE=utf8_bin;