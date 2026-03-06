import { render, screen } from "@testing-library/react"
import ProductItem from "."

describe('상품 상세 컴포넌트 테스트', () => {
  test('현재 상품의 title과 description이 제대로 렌더링되는지 확인', () => {
    render(<ProductItem title="테스트 노트북" description="테스트용 입니다" />)

    const titleElement = screen.getByText('테스트 노트북')
    const descriptionElement = screen.getByText('테스트용 입니다')

    expect(titleElement).toBeInTheDocument()
    expect(descriptionElement).toBeInTheDocument()
  })

  test('증가 버튼, 감소버튼, 초기숫자인 1이 존재하는지 확인', ()=>{
    render(<ProductItem title="테스트 노트북" description="테스트용 입니다" />)

    const increaseBtn = screen.getByRole('button', { name: '+' })
    const decreaseBtn = screen.getByRole('button', { name: '-' })
    const countElement = screen.getByText('1')

    expect(increaseBtn).toBeInTheDocument()
    expect(decreaseBtn).toBeInTheDocument()
    expect(countElement).toBeInTheDocument()
  })

  test('구매하기 버튼이 존재하는지 확인', () => {
    render(<ProductItem title="테스트 노트북" description="테스트용 입니다" />)

    const buyBtn = screen.getByRole('button', { name: '구매하기' })

    expect(buyBtn).toBeInTheDocument()
  })

  test('상품이 품절 상태일 때 "품절" 텍스트가 렌더링되는지 확인', () => {
    render(<ProductItem title="테스트 노트북" description="테스트용 입니다" isSoldOut={true} />)
    
    const soldOutText = screen.getByText('품절')
    
    expect(soldOutText).toBeInTheDocument()
    
  })

  test('품절 상태일 때 버튼이 비활성화 되고, css 클래스명에 opacity-50과 cursor-not-allowed가 포함되는지 확인', () => {
    render(<ProductItem title="테스트 노트북" description="테스트용 입니다" isSoldOut={true} />)
    
    const buyBtn = screen.getByRole('button', { name: '구매하기' })

    expect(buyBtn).toBeDisabled()
    expect(buyBtn).toHaveClass('opacity-50')
    expect(buyBtn).toHaveClass('cursor-not-allowed')
  })

})