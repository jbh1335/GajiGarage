package com.ssafy.api.controller;

import com.ssafy.api.response.ChatRes;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

// @MessageMapping에 정의된 엔드포인트로 접근된 메시징 요청은 내부 처리 후
// @SendTo 어노테이션을 통해 정의된 "/topic/public" 대상의 모든 가입자들에게 전송된다.
@Controller
//@RequestMapping("/chat")
public class ChatController {
    // @MessageMapping: 클라이언트에서 보내는 메시지를 매핑함
    // 호출되는 주소: /app/chat/sendMessage, /app/chat/addUser
    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/public/{roomId}")
    public ChatRes sendMessage(@Payload ChatRes chatRes) {
        System.out.println("controller: sendMessage");
        // @Payload: 헤더와 메타 데이터를 제외한 실제 사용에 있어서 필요한 데이터
        return chatRes;
    }

//    private final SimpMessagingTemplate simpMessagingTemplate;
//
//    public ChatController(SimpMessagingTemplate simpMessagingTemplate) {
//        this.simpMessagingTemplate = simpMessagingTemplate;
//    }
//
//    @MessageMapping("/sendMessage")
//    public ChatRes sendMessage(@Payload ChatRes chatRes) {
//        // @Payload: 헤더와 메타 데이터를 제외한 실제 사용에 있어서 필요한 데이터
//        System.out.println("controller: sendMessage");
//
//        simpMessagingTemplate.convertAndSend("/topic/public/" + chatRes.getRoomId());
//        return chatRes;
//    }

    @MessageMapping("/addUser/{roomId}")
    @SendTo("/topic/public/{roomId}")
    public ChatRes addUser(@Payload ChatRes chatRes, SimpMessageHeaderAccessor headerAccessor) {
        System.out.println("controller: addUser");
        System.out.println("roomId: " + chatRes.getRoomId());
        headerAccessor.getSessionAttributes().put("username", chatRes.getSender());
        return chatRes;
    }

}
