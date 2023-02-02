package com.ssafy.db.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id = null;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "live_id")
    private Live live;
    public static Favorite of(Live live, User user) {
        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setLive(live);
        return favorite;
    }

}
