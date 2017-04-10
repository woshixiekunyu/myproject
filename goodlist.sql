/*
Navicat MySQL Data Transfer

Source Server         : mySQL
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : goodlist

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-04-09 19:46:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for carlist
-- ----------------------------
DROP TABLE IF EXISTS `carlist`;
CREATE TABLE `carlist` (
  `id` varchar(255) NOT NULL,
  `numbers` varchar(255) NOT NULL,
  `img` varchar(255) NOT NULL,
  `goodsName` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `goodsNum` varchar(255) NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of carlist
-- ----------------------------
INSERT INTO `carlist` VALUES ('2', 'XKY1234', '../img/goodlist2.jpg', '博士伦博乐纯隐形眼镜多功能护理液300ml+300ml+120ml', '142.00', '');
INSERT INTO `carlist` VALUES ('4', 'XKY1236', '../img/goodlist4.jpg', '爱尔康傲滴多功能隐形眼镜护理液355ml*2+60ml（傲滴/乐明/恒', '89.50', '');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` varchar(200) NOT NULL,
  `goodsName` varchar(255) NOT NULL,
  `price` varchar(200) NOT NULL,
  `decription` varchar(300) NOT NULL,
  `img` varchar(255) NOT NULL,
  `bigimg` varchar(255) NOT NULL,
  `smallimg` varchar(255) NOT NULL,
  `bgimg` varchar(255) NOT NULL,
  `disc` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `extra` varchar(255) NOT NULL,
  `oldprice` varchar(255) NOT NULL,
  `cuxiao` varchar(255) NOT NULL,
  `orthername` varchar(255) NOT NULL,
  `kucun` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '博士伦润明清透fresh多功能护理液355ml+355ml+120ml', '90.00', '会员专享价，仅83元/套', '../img/goodlist1.jpg', '../img/goodlist1-big1.jpg?../img/goodlist1-big2.jpg?../img/goodlist1-big3.jpg?../img/goodlist1-big4.jpg?../img/goodlist1-big5.jpg', '../img/goodlist1-small1.jpg?../img/goodlist1-small2.jpg?../img/goodlist1-small3.jpg?../img/goodlist1-small4.jpg?../img/goodlist1-small5.jpg', '../img/sixing.png', '2132', 'XKY123', '123', '111', '会员专享价，仅83元/套?最高抵扣5元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('2', '博士伦博乐纯隐形眼镜多功能护理液300ml+300ml+120ml', '142.00', '会员专享价，仅102元/套', '../img/goodlist2.jpg', '../img/goodlist2-big1.jpg?../img/goodlist2-big2.jpg?../img/goodlist2-big3.jpg?../img/goodlist2-big4.jpg?../img/goodlist2-big5.jpg?../img/goodlist2-big6.jpg', '../img/goodlist2-small1.jpg?../img/goodlist2-small2.jpg?../img/goodlist2-small3.jpg?../img/goodlist2-small4.jpg?../img/goodlist2-small5.jpg?../img/goodlist2-small6.jpg', '../img/sixing.png', '3243', 'XKY1234', '134', '150', '会员专享价，仅102元/套?最高抵扣10元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('3', '爱尔康傲滴乐明隐形眼镜多功能护理液300ml*2+60ml*2（乐明/恒润随机发)', '103.50', '专业眼科医生推荐，长效保湿14小时，开封后可用6个月，性质温和不刺激。（新效期为2019年）', '../img/goodlist3.jpg', '../img/goodlist3-big1.jpg?../img/goodlist3-big2.jpg?../img/goodlist3-big3.jpg?../img/goodlist3-big4.jpg?../img/goodlist3-big5.jpg?../img/goodlist3-big6.jpg?../img/goodlist3-big7.jpg?../img/goodlist3-big8.jpg', '../img/goodlist3-small1.jpg?../img/goodlist3-small2.jpg?../img/goodlist3-small3.jpg?../img/goodlist3-small4.jpg?../img/goodlist3-small5.jpg?../img/goodlist3-small6.jpg?../img/goodlist3-small7.jpg?../img/goodlist3-small8.jpg', '../img/sixing.png', '2344', 'XKY1235', '103', '105', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('4', '爱尔康傲滴多功能隐形眼镜护理液355ml*2+60ml（傲滴/乐明/恒', '89.50', '会员专享价，仅83元/套', '../img/goodlist4.jpg', '../img/goodlist4-big1.jpg?../img/goodlist4-big2.jpg?../img/goodlist4-big3.jpg?../img/goodlist4-big4.jpg?../img/goodlist4-big5.jpg?../img/goodlist4-big6.jpg?../img/goodlist4-big7.jpg?../img/goodlist4-big8.jpg?../img/goodlist4-big9.jpg', '../img/goodlist4-small1.jpg?../img/goodlist4-small2.jpg?../img/goodlist4-small3.jpg?../img/goodlist4-small4.jpg?../img/goodlist4-small5.jpg?../img/goodlist4-small6.jpg?../img/goodlist4-small7.jpg?../img/goodlist4-small8.jpg?../img/goodlist4-small9.jpg', '../img/sixingban.png', '6546', 'XKY1236', '100', '95', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('5', '博士伦润明清透fresh多功能护理液355ml+355ml+120ml', '90.00', '套装特惠 降价促销！美国进口，用于硬性透气隐形眼镜,有效清洁、除蛋白、保持镜片湿润性。', '../img/goodlist1.jpg', '../img/goodlist1-big1.jpg?../img/goodlist1-big2.jpg?../img/goodlist1-big3.jpg?../img/goodlist1-big4.jpg?../img/goodlist1-big5.jpg', '../img/goodlist1-small1.jpg?../img/goodlist1-small2.jpg?../img/goodlist1-small3.jpg?../img/goodlist1-small4.jpg?../img/goodlist1-small5.jpg', '../img/sixing.png', '5435', 'XKY1237', '105', '110', '会员专享价，仅83元/套?最高抵扣5元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '无库存');
INSERT INTO `goods` VALUES ('6', '博士伦博乐纯隐形眼镜多功能护理液300ml+300ml+120ml', '142.00', '会员专享价，仅102元/套', '../img/goodlist2.jpg', '../img/goodlist2-big1.jpg?../img/goodlist2-big2.jpg?../img/goodlist2-big3.jpg?../img/goodlist2-big4.jpg?../img/goodlist2-big5.jpg?../img/goodlist2-big6.jpg', '../img/goodlist2-small1.jpg?../img/goodlist2-small2.jpg?../img/goodlist2-small3.jpg?../img/goodlist2-small4.jpg?../img/goodlist2-small5.jpg?../img/goodlist2-small6.jpg', '../img/sixing.png', '4354', 'XKY1238', '107', '150', '会员专享价，仅102元/套?最高抵扣10元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '无库存');
INSERT INTO `goods` VALUES ('7', '爱尔康傲滴乐明隐形眼镜多功能护理液300ml*2+60ml*2（乐明/恒润随机发)', '103.56', '专业眼科医生推荐，长效保湿14小时，开封后可用6个月，性质温和不刺激。（新效期为2019年）', '../img/goodlist3.jpg', '../img/goodlist3-big1.jpg?../img/goodlist3-big2.jpg?../img/goodlist3-big3.jpg?../img/goodlist3-big4.jpg?../img/goodlist3-big5.jpg?../img/goodlist3-big6.jpg?../img/goodlist3-big7.jpg?../img/goodlist3-big8.jpg', '../img/goodlist3-small1.jpg?../img/goodlist3-small2.jpg?../img/goodlist3-small3.jpg?../img/goodlist3-small4.jpg?../img/goodlist3-small5.jpg?../img/goodlist3-small6.jpg?../img/goodlist3-small7.jpg?../img/goodlist3-small8.jpg', '../img/sixing.png', '8790', 'XKY1239', '123', '120', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('8', '爱尔康傲滴多功能隐形眼镜护理液355ml*2+60ml（傲滴/乐明/恒', '89.87', '15秒快速清洗，无需揉搓，懒癌必备，开封后可用6个月，性质温和不刺激。（新效期到2018年）', '../img/goodlist4.jpg', '../img/goodlist4-big1.jpg?../img/goodlist4-big2.jpg?../img/goodlist4-big3.jpg?../img/goodlist4-big4.jpg?../img/goodlist4-big5.jpg?../img/goodlist4-big6.jpg?../img/goodlist4-big7.jpg?../img/goodlist4-big8.jpg?../img/goodlist4-big9.jpg', '../img/goodlist4-small1.jpg?../img/goodlist4-small2.jpg?../img/goodlist4-small3.jpg?../img/goodlist4-small4.jpg?../img/goodlist4-small5.jpg?../img/goodlist4-small6.jpg?../img/goodlist4-small7.jpg?../img/goodlist4-small8.jpg?../img/goodlist4-small9.jpg', '../img/sixingban.png', '5435', 'XKY1230', '111', '100', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('9', '博士伦润明清透fresh多功能护理液355ml+355ml+120ml', '90.00', '会员专享价，仅83元/套', '../img/goodlist1.jpg', '../img/goodlist1-big1.jpg?../img/goodlist1-big2.jpg?../img/goodlist1-big3.jpg?../img/goodlist1-big4.jpg?../img/goodlist1-big5.jpg', '../img/goodlist1-small1.jpg?../img/goodlist1-small2.jpg?../img/goodlist1-small3.jpg?../img/goodlist1-small4.jpg?../img/goodlist1-small5.jpg', '../img/sixing.png', '2132', 'XKY123', '123', '111', '会员专享价，仅83元/套?最高抵扣5元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('10', '博士伦博乐纯隐形眼镜多功能护理液300ml+300ml+120ml', '142.00', '会员专享价，仅102元/套', '../img/goodlist2.jpg', '../img/goodlist2-big1.jpg?../img/goodlist2-big2.jpg?../img/goodlist2-big3.jpg?../img/goodlist2-big4.jpg?../img/goodlist2-big5.jpg?../img/goodlist2-big6.jpg', '../img/goodlist2-small1.jpg?../img/goodlist2-small2.jpg?../img/goodlist2-small3.jpg?../img/goodlist2-small4.jpg?../img/goodlist2-small5.jpg?../img/goodlist2-small6.jpg', '../img/sixing.png', '3243', 'XKY1234', '134', '150', '会员专享价，仅102元/套?最高抵扣10元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('11', '爱尔康傲滴乐明隐形眼镜多功能护理液300ml*2+60ml*2（乐明/恒润随机发)', '103.50', '专业眼科医生推荐，长效保湿14小时，开封后可用6个月，性质温和不刺激。（新效期为2019年）', '../img/goodlist3.jpg', '../img/goodlist3-big1.jpg?../img/goodlist3-big2.jpg?../img/goodlist3-big3.jpg?../img/goodlist3-big4.jpg?../img/goodlist3-big5.jpg?../img/goodlist3-big6.jpg?../img/goodlist3-big7.jpg?../img/goodlist3-big8.jpg', '../img/goodlist3-small1.jpg?../img/goodlist3-small2.jpg?../img/goodlist3-small3.jpg?../img/goodlist3-small4.jpg?../img/goodlist3-small5.jpg?../img/goodlist3-small6.jpg?../img/goodlist3-small7.jpg?../img/goodlist3-small8.jpg', '../img/sixing.png', '2344', 'XKY1235', '103', '105', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('12', '爱尔康傲滴多功能隐形眼镜护理液355ml*2+60ml（傲滴/乐明/恒', '89.50', '会员专享价，仅83元/套', '../img/goodlist4.jpg', '../img/goodlist4-big1.jpg?../img/goodlist4-big2.jpg?../img/goodlist4-big3.jpg?../img/goodlist4-big4.jpg?../img/goodlist4-big5.jpg?../img/goodlist4-big6.jpg?../img/goodlist4-big7.jpg?../img/goodlist4-big8.jpg?../img/goodlist4-big9.jpg', '../img/goodlist4-small1.jpg?../img/goodlist4-small2.jpg?../img/goodlist4-small3.jpg?../img/goodlist4-small4.jpg?../img/goodlist4-small5.jpg?../img/goodlist4-small6.jpg?../img/goodlist4-small7.jpg?../img/goodlist4-small8.jpg?../img/goodlist4-small9.jpg', '../img/sixingban.png', '6546', 'XKY1236', '100', '95', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('13', '博士伦润明清透fresh多功能护理液355ml+355ml+120ml', '90.00', '套装特惠 降价促销！美国进口，用于硬性透气隐形眼镜,有效清洁、除蛋白、保持镜片湿润性。', '../img/goodlist1.jpg', '../img/goodlist1-big1.jpg?../img/goodlist1-big2.jpg?../img/goodlist1-big3.jpg?../img/goodlist1-big4.jpg?../img/goodlist1-big5.jpg', '../img/goodlist1-small1.jpg?../img/goodlist1-small2.jpg?../img/goodlist1-small3.jpg?../img/goodlist1-small4.jpg?../img/goodlist1-small5.jpg', '../img/sixing.png', '5435', 'XKY1237', '105', '110', '会员专享价，仅83元/套?最高抵扣5元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '无库存');
INSERT INTO `goods` VALUES ('14', '博士伦博乐纯隐形眼镜多功能护理液300ml+300ml+120ml', '142.00', '会员专享价，仅102元/套', '../img/goodlist2.jpg', '../img/goodlist2-big1.jpg?../img/goodlist2-big2.jpg?../img/goodlist2-big3.jpg?../img/goodlist2-big4.jpg?../img/goodlist2-big5.jpg?../img/goodlist2-big6.jpg', '../img/goodlist2-small1.jpg?../img/goodlist2-small2.jpg?../img/goodlist2-small3.jpg?../img/goodlist2-small4.jpg?../img/goodlist2-small5.jpg?../img/goodlist2-small6.jpg', '../img/sixing.png', '4354', 'XKY1238', '107', '150', '会员专享价，仅102元/套?最高抵扣10元，100积分抵扣1元?+25元换购诺思美妆彩瞳月抛3片装', '', '无库存');
INSERT INTO `goods` VALUES ('15', '爱尔康傲滴乐明隐形眼镜多功能护理液300ml*2+60ml*2（乐明/恒润随机发)', '103.56', '专业眼科医生推荐，长效保湿14小时，开封后可用6个月，性质温和不刺激。（新效期为2019年）', '../img/goodlist3.jpg', '../img/goodlist3-big1.jpg?../img/goodlist3-big2.jpg?../img/goodlist3-big3.jpg?../img/goodlist3-big4.jpg?../img/goodlist3-big5.jpg?../img/goodlist3-big6.jpg?../img/goodlist3-big7.jpg?../img/goodlist3-big8.jpg', '../img/goodlist3-small1.jpg?../img/goodlist3-small2.jpg?../img/goodlist3-small3.jpg?../img/goodlist3-small4.jpg?../img/goodlist3-small5.jpg?../img/goodlist3-small6.jpg?../img/goodlist3-small7.jpg?../img/goodlist3-small8.jpg', '../img/sixing.png', '8790', 'XKY1239', '123', '120', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
INSERT INTO `goods` VALUES ('16', '爱尔康傲滴多功能隐形眼镜护理液355ml*2+60ml（傲滴/乐明/恒', '89.87', '15秒快速清洗，无需揉搓，懒癌必备，开封后可用6个月，性质温和不刺激。（新效期到2018年）', '../img/goodlist4.jpg', '../img/goodlist4-big1.jpg?../img/goodlist4-big2.jpg?../img/goodlist4-big3.jpg?../img/goodlist4-big4.jpg?../img/goodlist4-big5.jpg?../img/goodlist4-big6.jpg?../img/goodlist4-big7.jpg?../img/goodlist4-big8.jpg?../img/goodlist4-big9.jpg', '../img/goodlist4-small1.jpg?../img/goodlist4-small2.jpg?../img/goodlist4-small3.jpg?../img/goodlist4-small4.jpg?../img/goodlist4-small5.jpg?../img/goodlist4-small6.jpg?../img/goodlist4-small7.jpg?../img/goodlist4-small8.jpg?../img/goodlist4-small9.jpg', '../img/sixingban.png', '5435', 'XKY1230', '111', '100', '爱尔康品牌日-买送珍视明眼贴1袋装2片（限赠1）?爱尔康品牌日-满315送装饰兔挂饰（限赠1）?+25元换购诺思美妆彩瞳月抛3片装', '', '有库存');
