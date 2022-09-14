import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSpotifyPlayerComponent } from './card-spotify-player.component';

describe('CardSpotifyPlayerComponent', () => {
    let component: CardSpotifyPlayerComponent;
    let fixture: ComponentFixture<CardSpotifyPlayerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardSpotifyPlayerComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardSpotifyPlayerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
