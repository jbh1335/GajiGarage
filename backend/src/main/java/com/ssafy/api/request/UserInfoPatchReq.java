package com.ssafy.api.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserPatchRequest")
public class UserInfoPatchReq {
    @ApiModelProperty(name = "유저 Password", example = "your_password")
    String password;
    @ApiModelProperty(name = "유저 Nickname", example = "your_nickname")
    String nickname;
    @ApiModelProperty(name = "유저 Phone", example = "010-1234-5678")
    String phoneNumber;
    @ApiModelProperty(name = "유저 bankName", example = "기업")
    String bankName;
    @ApiModelProperty(name = "유저 bankAddress", example = "110-xxxxxxxxx")
    String bankAddress;
}
