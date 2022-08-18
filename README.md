## 🥒 Piickle
### 지금 내게 필요한 대화주제 추천 서비스, 피클!

<aside>

#### 📍 1. 어색한 분위기 또는 침묵의 발생

  >위의 상황은 사실 ‘처음 보는 사람들이’ ‘많이 모이는’ 경우, 필연적으로 발생할 수밖에 없는 상황입니다. 
  >하지만 필연적으로 발생하는 과정을 매끄러운 아이스브레이킹 과정을 통해서 넘길 수 있다면 그리고 보다 서로에 대해 더 알 수 있도록 설계할 수 있다면 충분히 해결가능하다고 판단했습니다. 

  -> 적절한 아이스브레이킹용 주제를 제시하며 대화주제 추천 시작

#### 📍 2. 오락과 재미에 치중된 대화에서 오는 현타

  >오락과 재미는 사실 술자리에서 빠질 수 없는 부분이고 빠져서는 안된다고 생각을 합니다.
  >특히, 필요한 이유는 사람들끼리의 충분히 친해지며 공감대가 형성되기 전, 갑자기 진중한 이야기를 한다면 어떤 분위기가 발생될까요? 
  >이것을 알기 때문에 제가 하고자 하는 방향성은 재미를 없애자!가 아닙니다. 
  >재미있으면서도 진중한 대화 or 재미있는 주제에서 이어지는 진중한 대화를 만들어 가고자 합니다.

  -> 가볍고 유쾌한 주제에서 출발해서 깊고 진중한 대화까지의 자연스러운 추천 흐름

#### 📍 3. 사람들이 공감하고, 집중할 수 있는 주제를 떠올리는 것에 있어서 한계

  >SOPT의 경우만 해도 정말 비슷한 관심사를 가진 사람들이 모였지만 술자리에서 이야기를 해보면 관심이 가고 재미있게 느껴지는 주제는 다 다릅니다. 
  >또한 이러한 주제를 떠올리는 것도 굉장히 어렵죠. 
  >그래서 저는 SOPT에 오는 매 기수마다 항상 궁금해하는 부분이나 이야기하고 싶은 공통적인 주제가 있을 것이며, 그 주제를 모아서 직접 주제에 대한 선호도를 나누면 좋겠다고 생각했습니다.

  -> 마음에 드는 주제를 북마크하고 모아서 볼 수 있도록 하는 아카이빙 기능

</aside>
<br /><br/>

## 👥 Team Piickle 피클의 웹딱지들을 소개합니다:)
|[이주함](https://github.com/joohaem)|[서혜은](https://github.com/henization)|[고나연](https://github.com/NYeonK?tab=overview&from=2022-07-01&to=2022-07-10)|[윤지영](https://github.com/NaveOWO)|
|------|------|------|------|
|![image](https://user-images.githubusercontent.com/87578512/178135117-a1c2c380-a63c-4435-990b-0fcb501820ba.png)|![image](https://user-images.githubusercontent.com/87578512/178135086-954a203e-ba6c-4c04-b7d1-7a02c13b1d09.png)|<img width="529" alt="스크린샷 2022-07-10 오후 4 20 16" src="https://user-images.githubusercontent.com/87578512/178135232-7d1b4068-d94f-49e2-8ac0-4c8ea8f9d266.png">|![image](https://user-images.githubusercontent.com/87578512/178135034-01f22b87-1f35-4a19-8359-b63874055e31.png)|

<br /><br/>

## ⚙️ Stack

```json
    "axios": "^0.26.0",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "react-range": "^1.8.13",
    "react-router-dom": "^6.2.1",
    "react-scripts": "5.0.1",
    "react-slick": "^0.29.0",
    "recoil": "^0.7.4",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.5",
    "swr": "^1.3.0"
    "msw": "^0.42.1",
```

<br /><br/>
## 🖥 뷰 소개
### 1. 메인 페이지
유저가 가장 처음 보는 피클 서비스의 페이지 입니다.  

#### Best Piickle 
:: 이번 달의 가장 북마크가 많이 된 대화주제들을 Swiper를 통해 보여줍니다. 각각의 카드를 클릭하면 대화주제 추천 카드로 이동합니다.  
#### Mood Piickle 
:: 클릭시 해당 카테고리로 지정된 대화주제 카드로 이동합니다. 더보기를 클릭했을 때에는 카테고리 페이지로 이동합니다.  
#### Piickle Me 
:: 유저들이 해당 주제에 대해 투표를 하고 결과를 볼 수 있습니다. 투표하기를 클릭했을 때 투표 페이지로 이동합니다.

 <img src="https://user-images.githubusercontent.com/87578512/179968567-e5288e4a-718d-463d-a99d-ea939b2942b2.png" width="30%" />

<br /><br/>
### 2. 카드 슬라이더  
사용자에게 여러가지 대화주제를 추천해주는 페이지입니다.  
카드 슬라이더로 인터랙션이 이루어집니다.  
왼쪽 하단의 하트 버튼을 클릭하면 북마크가 되고, 오른쪽 하단의 <추천필터> 버튼을 클릭하면 사용자가 대화주제를 필터링할 수 있습니다.

 <div>
 <img src="https://user-images.githubusercontent.com/87578512/179973151-ad9b1617-c045-470f-8213-ecef66562ea8.png" width="45%" />  
 <img src="https://user-images.githubusercontent.com/87578512/180001955-3dfe66aa-d8d5-4a47-9f19-6b139afb7b20.png" width="25%" />  
 <img src="https://user-images.githubusercontent.com/87578512/179982012-d5e25761-47f3-4d0c-a3f7-689bf12cc3b0.png" width="25%" />
</div>

<br /><br/>
### 3. 투표 페이지  
사용자들이 여러가지 대화주제애 대해서 의견을 공유할 수 있는 기능입니다.  
투표페이지로 이동했을 때, 로그인이 되어있지 않은 사용자는 투표하기 버튼을 통해 로그인 유도Modal을 띄워주고,  
로그인이 되어있는 사용자에게는 투표를 하고 결과페이지를 볼 수 있게 합니다.

<div>
 <img src="https://user-images.githubusercontent.com/87578512/179976921-1fb9ef6d-5895-4938-9f9a-3207e8e3b2d9.png" width="30%" />    
 <img src="https://user-images.githubusercontent.com/87578512/179974135-d71cb0a3-10cb-4d77-ade5-94bca026f755.png" width="30%" />  
</div>

<br /><br/>
### 4. Menu Bar  
메인페이지에서 오른쪽 상단 버튼을 클릭하면 나타나는 Bar입니다.  
마이페이지 / 로그인페이지 / 대화주제 추천카드 / 카테고리 페이지 / 투표 페이지로 이동할 수 있습니다.

 <img src="https://user-images.githubusercontent.com/87578512/179977148-50a4a2fc-e5d3-4e09-8564-d045ea913454.png" width="30%" /> 

<br /><br/>
### 5. 카테고리 페이지  
같은 카테고리의 대화주제를 카드로 묶어서 사용자에게 보여주는 페이지 입니다.

 <img src="https://user-images.githubusercontent.com/87578512/179981944-b3c1b59d-a37c-49dd-89c8-86f514f6c13e.png" width="30%" /> 

<br /><br/>
### 6. 마이 페이지
 마이페이지에서는 프로필 수정과, 내가 북마크한 대화주제들을 볼 수 있습니다.  

 <img src="https://user-images.githubusercontent.com/87578512/179983101-4656c414-504f-4971-b44b-c59c80dcf6dd.png" width="30%" /> 

<br /><br/>
### 7. 북마크 리스트  
 마이페이지에서 <카드 모아보기> 버튼을 클릭했을 때 이동할 수 있는 페이지입니다. 내가 북마크한 대화주제들이 리스트형식으로 보여집니다.

 <img src="https://user-images.githubusercontent.com/87578512/179982571-679e22ef-8ab7-40f8-934b-db9c67c3efde.png" width="30%" /> 

<br /><br/>
### 8. 닉네임 수정 페이지
 닉네임 모달창을 통해 닉네임을 수정할 수 있습니다.

<div>
 <img src="https://user-images.githubusercontent.com/87578512/179985636-4c9442ff-2b18-45fc-ac4a-7a19c90fd1f1.png" width="30%" />   
 <img src="https://user-images.githubusercontent.com/87578512/179985661-367bd54f-119f-46a0-91c0-917c3d13510c.png" width="30%" /> 
</div>

<br /><br/>
### 9. 로그인 유도 Modal
 로그인을 하지 않을 사용자가 로그인이 필요한 기능을 선택했을 때 로그인 모달창을 띄웁니다.

 <img src="https://user-images.githubusercontent.com/87578512/179991396-1a5baa7c-d1dc-4de9-8295-6f6c64d40745.png" width="30%" /> 

<br /><br/>
### 9. 로그인 페이지
 로그인을 할 수 있는 페이지 입니다.

<div>
 <img src="https://user-images.githubusercontent.com/87578512/179992075-63fe8aed-145c-4752-af6d-35ad76d0414b.png" width="30%" />   
 <img src="https://user-images.githubusercontent.com/87578512/179992083-abc9d940-b75d-4698-a9c3-240713afdfe0.png" width="30%" /> 
</div>
