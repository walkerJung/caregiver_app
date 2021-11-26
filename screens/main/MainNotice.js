import React from "react";
import { MainNotiItem, MainNotiTitle } from "../../components/form/ListStyle";

// Floatlist 사용하려 했지만 메인페이지에 scrollview을 사용하고 있어서 중첩이 발생되므로 에러 메세지가 떠서 우선 이렇게 처리하도록 하겠습니다.
// 맨 마지막 얘는 밑에 밑줄이 안 들어가는데 가능할까요... 4개만 출력되면 될 것 같습니다.
const MainNotice = () => {
  return (
    <>
      <MainNotiItem activeOpacity={0.8} onPress={() => {}}>
        <MainNotiTitle numberOfLines={1} ellipsizeMode="tail">
          [안내] 안내드립니다.
        </MainNotiTitle>
      </MainNotiItem>

      <MainNotiItem activeOpacity={0.8} onPress={() => {}}>
        <MainNotiTitle numberOfLines={1} ellipsizeMode="tail">
          [점검] 간병서비스 점검 안내
        </MainNotiTitle>
      </MainNotiItem>

      <MainNotiItem activeOpacity={0.8} onPress={() => {}}>
        <MainNotiTitle numberOfLines={1} ellipsizeMode="tail">
          [공지] 케어코리아 어플 출시
        </MainNotiTitle>
      </MainNotiItem>

      <MainNotiItem
        style={{ borderBottomWidth: 0 }}
        activeOpacity={0.8}
        onPress={() => {}}
      >
        <MainNotiTitle numberOfLines={1} ellipsizeMode="tail">
          [공지] 케어코리아 사용설명서
        </MainNotiTitle>
      </MainNotiItem>
    </>
  );
};

export default MainNotice;
