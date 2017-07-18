# googlesheet

구글 지도를 사용해서 주소변환을 했더니, 도로명주소를 못 찾아오는 주소가 있습니다.
그래서 네이버 API 를 이용해서 만들었습니다.

# 사용법

[네이버 개발자 페이지](https://developers.naver.com/apps/#/list)에서 아래 두가지 정보를 저장합니다.

1. 어플리케이션을 등록합니다.
2. 아래 두가지 정보를 가져옵니다.

   - Client ID
   - Application 명

3. 소스코드에 아래 부분에 내용을 수정합니다.

   'X-Naver-Client-Id' : '네이버 Client ID',
   'X-Naver-Client-Secret' : '네이버 Secret'

4. 주소위에 커서를 올리고 스크립트를 실행합니다.
5. 주소의 두칸 오른쪽에 Lat, Lng 정보가 입력 됩니다.

# 예정

언젠가 부가기능에 추가해서 올릴 수 없나 고민을 해 봅니다.
